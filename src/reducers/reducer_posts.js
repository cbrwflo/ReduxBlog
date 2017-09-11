import _ from 'lodash';
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from '../actions'; //same as ../actions/index

export default function(state = {}, action) {
  switch (action.type) {
    case DELETE_POST: 
      //drop key:value pairs where key matches 2nd param
      return _.omit(state, action.payload);

    case FETCH_POST: 
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;

      // ES6: Key interpolation. Same as above.
      return { ...state, [action.payload.data.id]: action.payload.data};

    case FETCH_POSTS:
      return _.mapKeys(action.payload.data, 'id');
    
    default:
      return state;
  }
}