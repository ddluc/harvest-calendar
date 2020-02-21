import React from 'react';
import PricingToggle from '../../../components/sidebar/PricingToggle';
import { getMockState } from '../../__mocks/state.mock.js';
import { shallow } from 'enzyme';

describe('PricingToggle', () => {

  it('should render', () => {
    let mockState = getMockState();
    const contextSpy = buildContextSpy(mockState);
    let wrapper = shallow(<PricingToggle />);
    expect(wrapper).toMatchSnapshot();
    contextSpy.mockClear(); 
  });


});
