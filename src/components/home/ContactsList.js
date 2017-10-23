import React from 'react';
import PropTypes from 'prop-types';
import styles from './contactsListStyles';

const ContactsList = ({contacts: {data, meta}, toggleModal, changePage}) => {
  return (
    <div className="col-sm-6">
      <h1>Your Contacts:</h1>
      <p>
        Page {meta.current_page} of {meta.total_pages}
        {meta.current_page > 1 &&
        <button className="btn" onClick={changePage} data-dir="back" data-curr={meta.current_page} style={styles.btn}>&lt;- Previous</button>}
        {meta.current_page < meta.total_pages &&
        <button className="btn" onClick={changePage} data-dir="forward" data-curr={meta.current_page} style={styles.btn}>Next -&gt;</button>}
      </p>
      <table className="table">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th/>
        </tr>
        </thead>
        <tbody>
        {data.map(contact =>
          <tr key={contact.id}>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td>
              <button className="btn" onClick={toggleModal} data-id={`contact-${contact.id}`}>Send Message
                -&gt;</button>
            </td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.object.isRequired,
  toggleModal: PropTypes.func,
  changePage: PropTypes.func
};

export default ContactsList;
