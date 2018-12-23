import * as types from 'actions/actionTypes';
import skillsApi from 'api/skills';

// generate a random id
let uniqueId = 0;

export const fetchAllSkillsInit = () => ({ type: types.FETCH_SKILLS_INIT });
export const fetchAllSkillsSuccess = payload =>
  ({ type: types.FETCH_SKILLS_SUCCESS, payload });
export const fetchAllSkillsError = payload => ({ type: types.FETCH_SKILLS_ERROR, payload });

export const addSkill = payload => ({ type: types.ADD_SKILL, payload });
export const selectExperience = payload => ({ type: types.SELECTION_EXPERIENCE, payload });

export const createSkillInit = () => ({ type: types.CREATE_SKILL_INIT });
export const createSkillSuccess = payload => ({ type: types.CREATE_SKILL_SUCCESS, payload });
export const createSkillError = payload => ({ type: types.CREATE_SKILL_ERROR, payload });

export const deleteSkillInit = () => ({ type: types.DELETE_SKILL_INIT });
export const deleteSkillSuccess = payload => ({ type: types.DELETE_SKILL_SUCCESS, payload });
export const deleteSkillError = payload => ({ type: types.DELETE_SKILL_ERROR, payload });

export const getAllSkills = () => async(dispatch) => {
  dispatch(fetchAllSkillsInit());
  try {
    const skills = await skillsApi.getAllSkills();
    uniqueId = (skills[skills.length - 1]).id + 1;
    dispatch(fetchAllSkillsSuccess(skills));
  } catch (error) {
    dispatch(fetchAllSkillsError(error.response.data));
  }
};

export const createSkill = data => async(dispatch) => {
  dispatch(createSkillInit());
  try {
    const skill = await skillsApi.createSkill({ id: uniqueId, ...data });
    dispatch(createSkillSuccess(skill));
    uniqueId += 1;
  } catch (error) {
    dispatch(createSkillError(error.response.data));
  }
};

export const deleteSkill = id => async(dispatch) => {
  dispatch(deleteSkillInit());
  try {
    await skillsApi.deleteSkill(id);
    dispatch(deleteSkillSuccess(id));
  } catch (error) {
    dispatch(deleteSkillError(error.response.data));
  }
};