import * as types from 'actions/actionTypes';
import skillsApi from 'api/skills';

const fetchAllSkillsInit = () => ({ type: types.FETCH_SKILLS_INIT });
const fetchAllSkillsSuccess = payload => ({ type: types.FETCH_SKILLS_SUCCESS, payload });
export const fetchAllSkillsError = payload => ({ type: types.FETCH_SKILLS_ERROR, payload });

export const getAllSkills = () => async(dispatch) => {
  dispatch(fetchAllSkillsInit());
  try {
    const skills = await skillsApi.getAllSkills();
    dispatch(fetchAllSkillsSuccess(skills));
  } catch (error) {
    dispatch(fetchAllSkillsError(error.response.data.message));
  }
};