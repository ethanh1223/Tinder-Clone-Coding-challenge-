//When we "like" a user, we check if user likes us as well
  //If they do, we add to "matched users"

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