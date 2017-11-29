import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducer from '../reducer';

export default createStore(reducer, applyMiddleware(promise, thunk));;
