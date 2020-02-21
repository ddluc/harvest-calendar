import React from 'react';
import SeasonPicker from '../../../components/sidebar/SeasonPicker';
import { getMockState } from '../../__mocks/state.mock.js';
import { shallow } from 'enzyme';

describe('SeasonPicker', () => {

  it('should render', () => {
    let mockState = getMockState();
    const contextSpy = buildContextSpy(mockState);
    let wrapper = shallow(<SeasonPicker />);
    expect(wrapper).toMatchSnapshot();
    contextSpy.mockClear();
  });


});
