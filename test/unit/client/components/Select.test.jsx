/* eslint-disable no-unused-expressions */
import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import Select from 'components/common/Select';

const initiator = (options) => {
  const props = {
    name: '',
    selected: '',
    placeholder: '',
    options,
    onChange: () => {}
  };

  const wrapper = shallow(<Select {...props} />);

  return { wrapper };
};

describe('Select Component', () => {
  describe('Rendering Tests', () => {
    it('Must render component', () => {
      const { wrapper } = initiator(['test']);
      expect(wrapper.exists()).to.be.true;
    });

    it('Must render component without any options', () => {
      const { wrapper } = initiator();
      expect(wrapper.exists()).to.be.true;
    });
  });
});