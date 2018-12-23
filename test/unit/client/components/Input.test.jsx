/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Input from 'components/common/Input';

const initiator = () => {
  const props = {
    name: '',
    type: '',
    value: '',
    placeholder: '',
    onChange: () => {}
  };

  const wrapper = shallow(<Input {...props} />);

  return { wrapper };
};

describe('Input Component', () => {
  describe('Rendering Tests', () => {
    const { wrapper } = initiator();
    it('Must render component', () => {
      expect(wrapper.exists()).to.be.true;
    });
  });
});