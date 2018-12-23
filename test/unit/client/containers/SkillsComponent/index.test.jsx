/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import { SkillsContainer } from 'containers/SkillsContainer';

const initiator = (value = '') => {
  const props = {
    value,
    selection: '',
    data: [],
    actions: {
      getAllSkills: () => {},
      createSkill: () => {},
      deleteSkill: () => {}
    }
  };

  const wrapper = shallow(<SkillsContainer {...props} />);

  return { wrapper };
};

describe('Testing SkillsContainer', () => {
  describe('Rendering Tests', () => {
    it('Must render container', () => {
      const { wrapper } = initiator();
      expect(wrapper.exists()).to.be.true;
    });

    it('Must render container with value validation', () => {
      const { wrapper } = initiator('test');
      expect(wrapper.exists()).to.be.true;
    });
  });

  describe('Functionality Tests', () => {
    const handleCreateSpy = sinon.spy(SkillsContainer.prototype, 'handleCreate');
    const handleDeleteSpy = sinon.spy(SkillsContainer.prototype, 'handleDelete', 0);

    const { wrapper } = initiator();

    it('Must trigger handleCreate', () => {
      wrapper.find('Header').simulate('create');
      wrapper.update();
      expect(handleCreateSpy.calledOnce).to.be.true;
    });

    it('Must not trigger handleDelete', () => {
      wrapper.find('Lists').simulate('delete', 0);
      wrapper.update();
      expect(handleDeleteSpy.calledOnce).to.be.true;
    });
  });
});