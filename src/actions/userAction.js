import * as actionTypes from './actionTypes';

export const createUser = user => {
  return {
    type: actionTypes.CREATE_NEW_USER,
    user: user,
  };
};

export const deleteUser = id => {
  return {
    type: actionTypes.REMOVE_USER,
    id: id,
  };
};

export const editUser = id => {
  return {
    type: actionTypes.EDIT_USER,
    id: id,
  };
};
