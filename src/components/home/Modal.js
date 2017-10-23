import React from 'react';
import PropTypes from 'prop-types';
import styles from './modalStyles';

const Modal = ({message, toggleModal, handleMessageChange, sendMessage}) => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.modal}>
        Message:<br/>
        <textarea type="text" value={message} style={styles.input} maxLength="160" onChange={handleMessageChange}/>
        <div style={styles.btnWrapper}>
          <button className="btn" style={styles.cancel} onClick={toggleModal}>Cancel</button>
          <button className="btn btn-info" style={styles.send} onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
