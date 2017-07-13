export const CHOOSE_SWIPE_USER = 'CHOOSE_SWIPE_USER';
export const SET_SWIPE_USER = 'SET_SWIPE_USER';
export const LIKE_USER = 'LIKE_USER';

export function chooseNextSwipeUser(randomUserIndex) {
  return {
    type: CHOOSE_SWIPE_USER,
    payload: randomUserIndex
  }
}

export function setNextSwipeUser(randomUser) {
  return {
    type: SET_SWIPE_USER,
    payload: randomUser
  } 
}

export function likeUser(likedUser) {
  return {
    type: LIKE_USER,
    payload: likedUser
  }
}