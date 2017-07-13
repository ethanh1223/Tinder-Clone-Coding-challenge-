import { combineReducers } from 'redux';

import allUsers from './allUsersReducer.js';
import unseenUsers from './unseenUsersReducer.js';
import activeUser from './activeUserReducer.js';
import matchedUsers from './matchedUsersReducer.js';
import currentTabReducer from './currentTabReducer';

const rootReducer = combineReducers({
  allUsers: allUsers,
  unseenUsers: unseenUsers,
  matchedUsers: matchedUsers,
  currentSwipeUser: activeUser,
  currentChatUser: '',
  currentTab: currentTabReducer
});

export default rootReducer;
