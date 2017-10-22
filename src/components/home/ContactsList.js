import React from 'react';
import PropTypes from 'prop-types';

const ContactsList = ({contacts, sendMessage, handleMessageChange}) => {
  return (
    <div className="col-sm-6">
      <h1>Your Contacts:</h1>
      <table className="table">
        <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Message</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        {contacts.map(contact =>
          <tr key={contact.id}>
            <td>{contact.first_name}</td>
            <td>{contact.last_name}</td>
            <td><input type="text" maxLength="160" onChange={handleMessageChange} data-id={`contact-${contact.id}`}/></td>
            <td><button className="btn" onClick={sendMessage} data-id={`contact-${contact.id}`}>Send Message -&gt;</button></td>
          </tr>
        )}
        </tbody>
      </table>
    </div>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  sendMessage: PropTypes.func.isRequired,
  handleMessageChange: PropTypes.func.isRequired
};

export default ContactsList;
