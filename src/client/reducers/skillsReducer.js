import * as types from 'actions/actionTypes';
import initialState from 'reducers/initialState';

const skillsReducer = (state = initialState.skills, action) => {
  switch (action.type) {
    case types.FETCH_SKILLS_INIT:
      return { ...state };
    case types.FETCH_SKILLS_SUCCESS:
      return { ...state, data: action.payload };
    case types.FETCH_SKILLS_ERROR:
      return { ...state, message: action.payload };
    case types.ADD_SKILL:
      return { ...state, value: action.payload };
    case types.SELECTION_EXPERIENCE:
      return { ...state, selection: action.payload };
    case types.CREATE_SKILL_INIT:
      return { ...state };
    case types.CREATE_SKILL_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    case types.CREATE_SKILL_ERROR:
      return { ...state, message: action.payload };
    case types.DELETE_SKILL_INIT:
      return { ...state };
    case types.DELETE_SKILL_SUCCESS:
      return {
        ...state,
        data: state.data.filter(skill => skill.id !== action.payload)
      };
    case types.DELETE_SKILL_ERROR:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default skillsReducer;