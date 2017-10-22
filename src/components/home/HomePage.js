import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/userActions';
import ContactsList from './ContactsList';

class HomePage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this.fetchContacts = this.fetchContacts.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  fetchContacts() {
    this.props.actions.fetchContacts(1);
  }

  sendMessage(e) {
    this.props.actions.sendMessage(e.target.dataset.id);
  }

  handleMessageChange(e) {
    this.props.actions.sendMessage(e.target.dataset.id);
  }

  render() {
    const {contacts: {data}} = this.props.user;
    return (
      <div>
        {data && <ContactsList contacts={data} sendMessage={this.sendMessage} handleMessageChange={this.handleMessageChange}/>}
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
