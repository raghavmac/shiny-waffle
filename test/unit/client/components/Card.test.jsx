/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Card from 'components/common/Card';

const initiator = () => {
  const props = {
    title: '',
    subTitle: '',
    onDelete: () => {}
  };

  const wrapper = shallow(<Card {...props} />);

  return { wrapper };
};

describe('Card Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();
    it('Must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });
});