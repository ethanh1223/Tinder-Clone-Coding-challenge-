import { combineReducers } from 'redux';

import allUsers from './allUsersReducer.js';
import unseenUsers from './unseenUsersReducer.js';
import activeUser from './activeUserReducer.js';
import matchedUsers from './matchedUsersReducer.js';

const rootReducer = combineReducers({
  allUsers: allUsers,
  unseenUsers: unseenUsers,
  matchedUsers: matchedUsers,
  currentSwipeUser: activeUser,
  currentChatUser: '',
  currentTab: ''
});

export default rootReducer;
