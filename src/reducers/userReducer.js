import * as actionTypes from '../actions/actionTypes';

export default (state = [], action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_USER:
      return [...state, Object.assign({}, action.user)];

    case actionTypes.REMOVE_USER:
      return state.filter((data, i) => i !== action.id);

    case actionTypes.EDIT_USER:
      return [...state, action.id];

    default:
      return state;
  }
};
