import { SWITCH_TAB } from '../Actions/index.js';
export const SWIPE = 'SWIPE';
export const CHAT = 'CHAT';

export default function (state=SWIPE, action) {
  switch(action.type) {
    case SWITCH_TAB: 
      return action.payload;
  }
  return state;
}