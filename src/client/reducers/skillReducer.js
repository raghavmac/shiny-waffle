import * as types from 'actions/actionTypes';
import initialState from 'reducers/initialState';

const skillReducer = (state = initialState.skills, action) => {
  switch (action.type) {
    case types.FETCH_SKILLS_INIT:
      return { ...state };
    case types.FETCH_SKILLS_SUCCESS:
      return { ...state, data: action.payload };
    case types.FETCH_SKILLS_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default skillReducer;