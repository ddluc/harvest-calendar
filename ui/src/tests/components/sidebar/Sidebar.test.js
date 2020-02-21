import React from 'react';
import Sidebar from '../../../components/sidebar/Sidebar';
import { getMockState } from '../../__mocks/state.mock.js';
import { shallow } from 'enzyme';

describe('Sidebar', () => {

  it('should render', () => {
    let mockState = getMockState();
    const contextSpy = buildContextSpy(mockState);
    let wrapper = shallow(<Sidebar />);
    expect(wrapper).toMatchSnapshot();
    contextSpy.mockClear(); 
  });


});
