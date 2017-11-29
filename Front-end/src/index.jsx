import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import _ from './styles.sass';

import App from './components/App';
import store from './store';

render(
  <Provider store={store}>
    <App />
  </Provider>, document.getElementById('root'));
