import * as APIUtil from '../util/user_util';

export const RECEIVE_SINGLE_USER = "RECEIVE_SINGLE_USER";

export const receiveSingleUser = (user) => {
  return ({
    type: RECEIVE_SINGLE_USER,
    user: user,
  });
};

export const fetchSingleUser = (id) => (dispatch) => {
  return APIUtil.fetchSingleUser(id).
    then( (user) => { return dispatch(receiveSingleUser(user)); });
};