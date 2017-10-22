import React from 'react';
import PropTypes from 'prop-types';
import styles from './appStyles';

const App = ({children}) => {
  return (
    <div className="container-fluid" style={styles}>
      {children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.object.isRequired,
  params: PropTypes.object,
  actions: PropTypes.object,
};

export default App;
