import { expect } from 'chai';
import * as types from 'actions/actionTypes';
import reducer from 'reducers/skillsReducer';

describe('Testing skillsReducer', () => {
  describe('Default State Tests', () => {
    const defaultState = {
      value: '',
      selection: '',
      data: [],
      message: 'Something went wrong!'
    };

    it('Must return the default state on unknown action with default state', () => {
      const nextState = reducer(undefined, {});
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the FETCH_SKILLS_INIT action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.FETCH_SKILLS_INIT
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the FETCH_SKILLS_SUCCESS action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.FETCH_SKILLS_SUCCESS,
        payload: []
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the FETCH_SKILLS_ERROR action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.FETCH_SKILLS_ERROR,
        payload: 'Something went wrong!'
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the ADD_SKILL action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.ADD_SKILL,
        payload: ''
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the SELECTION_EXPERIENCE action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.SELECTION_EXPERIENCE,
        payload: ''
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the CREATE_SKILL_INIT action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.CREATE_SKILL_INIT
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the CREATE_SKILL_SUCCESS action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.CREATE_SKILL_SUCCESS,
        payload: { id: 0 }
      });
      expect(nextState).to.deep.equal({ ...defaultState, data: [{ id: 0 }] });
    });

    it('Must return the CREATE_SKILL_ERROR action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.CREATE_SKILL_ERROR,
        payload: 'Something went wrong!'
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the DELETE_SKILL_INIT action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.DELETE_SKILL_INIT
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the DELETE_SKILL_SUCCESS action with default state', () => {
      const nextState = reducer({
        ...defaultState,
        data: [{ id: 0 }]
      }, {
        type: types.DELETE_SKILL_SUCCESS,
        payload: 0
      });
      expect(nextState).to.deep.equal(defaultState);
    });

    it('Must return the DELETE_SKILL_ERROR action with default state', () => {
      const nextState = reducer(undefined, {
        type: types.DELETE_SKILL_ERROR,
        payload: 'Something went wrong!'
      });
      expect(nextState).to.deep.equal(defaultState);
    });
  });
});