/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Header from 'containers/SkillsContainer/Header';

const initiator = () => {
  const props = {
    options: [],
    isSkillValid: false,
    actions: {
      addSkill: () => {},
      selectExperience: () => {}
    }
  };

  const wrapper = shallow(<Header {...props} />);

  return { wrapper };
};

describe('Header Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();
    it('Must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });

  describe('Functionality Tests', () => {
    const { wrapper } = initiator();

    it('Must trigger onChange for Input', () => {
      wrapper.find('Input').simulate('change', { target: {} });
      wrapper.update();
    });

    it('Must trigger onChange for Select', () => {
      wrapper.find('Select').simulate('change', { target: {} });
      wrapper.update();
    });

    it('Must not trigger onClick for Button', () => {
      wrapper.find('Button').simulate('click');
      wrapper.update();
    });
  });
});