import React from 'react';
import SearchField from '../../../components/sidebar/SearchField';
import { getMockState } from '../../__mocks/state.mock.js';
import { shallow } from 'enzyme';

describe('SearchField', () => {

  it('should render', () => {
    let mockState = getMockState();
    const contextSpy = buildContextSpy(mockState);
    const props = {
      placeholder: 'hello'
    };
    let wrapper = shallow(<SearchField { ...props }/>);
    expect(wrapper).toMatchSnapshot();
    contextSpy.mockClear(); 
  });


});
