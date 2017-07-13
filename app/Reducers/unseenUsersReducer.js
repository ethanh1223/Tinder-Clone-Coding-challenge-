//Initializes with all users
//Removes users from potential matches after they've been seen

import allUsers from './allUsersReducer.js';
import { CHOOSE_SWIPE_USER } from '../Actions/index.js';

export default function (state = allUsers(), action) {
  switch(action.type) {
    case CHOOSE_SWIPE_USER:
      let unseenCopy = state.slice();
      unseenCopy.splice(action.payload, 1);
      return unseenCopy;
  }
  return state;
}