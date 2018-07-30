import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
  photo_url: null,
  email: null,
  username: null,
  firstname: null,
  lastname: null,
};

const profileSet = (state, action) => {
  console.log('action' + action);
  return updateObject( state, {
    photo_url: action.photo_url,
    email: action.email,
    username: action.username,
    firstname: action.firstname,
    lastname: action.lastname,
  } );
};

const reducer = ( state = initialState, action ) => {
  switch ( action.type ) {
    case actionTypes.PROFILE_SET: return profileSet(state, action);
    default:
      return state;
  }
};

export default reducer;
