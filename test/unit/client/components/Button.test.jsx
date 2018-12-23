/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Button from 'components/common/Button';

const initiator = () => {
  const props = {
    disabled: false,
    content: '',
    onClick: () => {}
  };

  const wrapper = shallow(<Button {...props} />);

  return { wrapper };
};

describe('Button Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();
    it('Must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });
});