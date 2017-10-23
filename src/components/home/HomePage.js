import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/userActions';
import ContactsList from './ContactsList';
import Modal from './Modal';
import toastr from 'toastr';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      message: '',
      contactId: null,
      modalActive: false
    };

    this.sendMessage = this.sendMessage.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  sendMessage() {
    const {contactId, message} = this.state;

    if (!message) {
      toastr.error('Message is blank.');
      return;
    }
    this.props.actions.sendMessage(contactId, message)
      .then(() => this.setState({modalActive: false, message: ''}))
      .then(() => toastr.success('Your message has been sent.'))
      .catch(() => toastr.error('Sorry, unable to send your message at this time.'));
  }

  changePage(e) {
    const direction = e.target.dataset.dir;
    const currentPage = parseInt(e.target.dataset.curr);
    const page = direction === 'forward' ? currentPage + 1 : currentPage - 1;
    this.props.actions.fetchContacts(page);
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  toggleModal(e) {
    const contactId = e.target.dataset.id;
    this.setState({modalActive: !this.state.modalActive, contactId});
  }

  render() {
    const {contacts} = this.props.user;
    return (
      <div>
        {contacts.data &&
        <div>
          <ContactsList contacts={contacts} toggleModal={this.toggleModal} changePage={this.changePage}/>
          {this.state.modalActive &&
          <Modal message={this.state.message} handleMessageChange={this.handleMessageChange}
                 toggleModal={this.toggleModal} sendMessage={this.sendMessage}/>
          }
        </div>
        }
      </div>
    );
  }
}

HomePage.propTypes = {
  actions: PropTypes.object.isRequired,
  user: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
