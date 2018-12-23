import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import * as actions from 'actions/skillsActions';

const mockStore = configureMockStore([thunk]);

describe('Testing skillsActions', () => {
  it('Must return fetchAllSkillsInit action', () => {
    expect(actions.fetchAllSkillsInit({})).to.deep.equal({
      type: 'FETCH_SKILLS_INIT'
    });
  });

  it('Must return fetchAllSkillsSuccess action', () => {
    expect(actions.fetchAllSkillsSuccess({})).to.deep.equal({
      type: 'FETCH_SKILLS_SUCCESS',
      payload: {}
    });
  });

  it('Must return fetchAllSkillsError action', () => {
    expect(actions.fetchAllSkillsError({})).to.deep.equal({
      type: 'FETCH_SKILLS_ERROR',
      payload: {}
    });
  });

  it('Must return addSkill action', () => {
    expect(actions.addSkill({})).to.deep.equal({
      type: 'ADD_SKILL',
      payload: {}
    });
  });

  it('Must return selectExperience action', () => {
    expect(actions.selectExperience({})).to.deep.equal({
      type: 'SELECTION_EXPERIENCE',
      payload: {}
    });
  });

  it('Must return createSkillInit action', () => {
    expect(actions.createSkillInit({})).to.deep.equal({
      type: 'CREATE_SKILL_INIT'
    });
  });

  it('Must return createSkillSuccess action', () => {
    expect(actions.createSkillSuccess({})).to.deep.equal({
      type: 'CREATE_SKILL_SUCCESS',
      payload: {}
    });
  });

  it('Must return createSkillError action', () => {
    expect(actions.createSkillError({})).to.deep.equal({
      type: 'CREATE_SKILL_ERROR',
      payload: {}
    });
  });

  it('Must return deleteSkillInit action', () => {
    expect(actions.deleteSkillInit({})).to.deep.equal({
      type: 'DELETE_SKILL_INIT'
    });
  });

  it('Must return deleteSkillSuccess action', () => {
    expect(actions.deleteSkillSuccess({})).to.deep.equal({
      type: 'DELETE_SKILL_SUCCESS',
      payload: {}
    });
  });

  it('Must return deleteSkillError action', () => {
    expect(actions.deleteSkillError({})).to.deep.equal({
      type: 'DELETE_SKILL_ERROR',
      payload: {}
    });
  });

  it('Must return the getAllSkills action PASS', () => {
    const mocker = new MockAdapter(axios);
    mocker.onGet('/skills').reply(200, [{ id: 1 }]);
    const store = mockStore();
    return store.dispatch(actions.getAllSkills()).then(() => {
      expect(store.getActions()[0]).to.deep.eql(actions.fetchAllSkillsInit());
      expect(store.getActions()[1]).to.deep.eql(actions.fetchAllSkillsSuccess([{ id: 1 }]));
    });
  });

  it('Must return the getAllSkills action FAIL', () => {
    const mocker = new MockAdapter(axios);
    mocker.onGet('/skills').reply(500, {});
    const store = mockStore();
    return store.dispatch(actions.getAllSkills()).then(() => {
      expect(store.getActions()[0]).to.deep.eql(actions.fetchAllSkillsInit());
      expect(store.getActions()[1]).to.deep.eql(actions.fetchAllSkillsError({}));
    });
  });

  it('Must return the createSkill action PASS', () => {
    const mocker = new MockAdapter(axios);
    mocker.onPost('/skills').reply(201, {});
    const store = mockStore();
    return store.dispatch(actions.createSkill({})).then(() => {
      expect(store.getActions()[0]).to.deep.eql(actions.createSkillInit());
      expect(store.getActions()[1]).to.deep.eql(actions.createSkillSuccess({}));
    });
  });

  it('Must return the createSkill action FAIL', () => {
    const mocker = new MockAdapter(axios);
    mocker.onPost('/skills').reply(500, {});
    const store = mockStore();
    return store.dispatch(actions.createSkill({})).then(() => {
      expect(store.getActions()[0]).to.deep.eql(actions.createSkillInit());
      expect(store.getActions()[1]).to.deep.eql(actions.createSkillError({}));
    });
  });

  it('Must return the deleteSkill action PASS', () => {
    const mocker = new MockAdapter(axios);
    mocker.onDelete('/skills/0').reply(200, {});
    const store = mockStore();
    return store.dispatch(actions.deleteSkill(0)).then(() => {
      expect(store.getActions()[0]).to.deep.eql(actions.deleteSkillInit());
      expect(store.getActions()[1]).to.deep.eql(actions.deleteSkillSuccess(0));
    });
  });

  it('Must return the deleteSkill action FAIL', () => {
    const mocker = new MockAdapter(axios);
    mocker.onDelete('/skills/0').reply(500, {});
    const store = mockStore();
    return store.dispatch(actions.deleteSkill(0)).then(() => {
      expect(store.getActions()[0]).to.deep.eql(actions.deleteSkillInit());
      expect(store.getActions()[1]).to.deep.eql(actions.deleteSkillError({}));
    });
  });
});