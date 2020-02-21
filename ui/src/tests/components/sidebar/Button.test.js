import React from 'react';
import Button from '../../../components/sidebar/Button';
import { getMockState } from '../../__mocks/state.mock.js';
import { shallow } from 'enzyme';

describe('Button', () => {

  it('should render', () => {
    let props = {
      label: 'Hello',
      type: 'primary',
      active: true,
      onClick: jest.fn(() => true)
    };
    let wrapper = shallow(<Button />);
    expect(wrapper).toMatchSnapshot();
  });

});
