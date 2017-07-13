import { SET_SWIPE_USER } from '../Actions/index.js';

export default function(state = '', action) {
  switch(action.type) {
    case SET_SWIPE_USER:
      return action.payload;
  }
  return state;
}