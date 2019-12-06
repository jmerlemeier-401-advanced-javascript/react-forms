import { createStore, combineReducers } from 'redux';

import userReducer from './user/user-reducers.js';
import messagesReducer from './messages/messages-reducers.js';

let reducers = combineReducers({
  user: userReducer,
  messages: messagesReducer
});

const store = () => createStore(reducers);

export default store;