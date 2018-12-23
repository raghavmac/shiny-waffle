/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import SkillsContainer from 'containers/SkillsContainer';

const mockStore = configureMockStore([thunk]);

const initiator = () => {
  const store = mockStore({ skillsReducer: {} });
  const wrapper = shallow(<SkillsContainer store={store} />);

  return { wrapper };
};

describe('Skills Container', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();
    it('Must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });
});