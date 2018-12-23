/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Lists from 'containers/SkillsContainer/Lists';

const initiator = () => {
  const props = {
    data: [{ id: 0, name: '', experience: '' }],
    onDelete: () => {}
  };

  const wrapper = shallow(<Lists {...props} />);

  return { wrapper };
};

describe('Lists Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();
    it('Must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });

  describe('Functionality Tests', () => {
    const { wrapper } = initiator();

    it('Must trigger onDelete for Card', () => {
      wrapper.find('Card').simulate('delete', 0);
      wrapper.update();
    });
  });
});