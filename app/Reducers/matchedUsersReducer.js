import { LIKE_USER } from '../Actions/index.js';

export default function(state = [], action) {
  switch(action.type) {
    case LIKE_USER:
      if (action.payload.likeMe) {
        return [action.payload, ...state];
      }
  }
  return state;
}