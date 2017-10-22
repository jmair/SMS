import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { StyleRoot } from 'radium';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min';
import '../node_modules/toastr/build/toastr.min.css';
import './styles/styles.scss';


const store = configureStore();

render(
  <StyleRoot>
    <Provider store={store}>
      <Router history={browserHistory} routes={routes}/>
    </Provider>
  </StyleRoot>,
  document.getElementById('app')
);
