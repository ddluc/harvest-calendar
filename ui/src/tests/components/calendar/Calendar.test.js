import React from 'react';
import Calendar from '../../../components/calendar/Calendar';
import * as Store from '../../../flux/store';
import { getMockState } from '../../__mocks/state.mock.js';
import { shallow } from 'enzyme';

describe('Calendar', () => {

  beforeEach(() => {
    let mockAppState = getMockState();
    jest
      .spyOn(Store, 'useStore')
      .mockImplementation(() => {
        return {state: mockAppState, dispatch: () => true}
      });
  });

  it('should render', () => {
    let wrapper = shallow(<Calendar />);
    expect(wrapper).toBeDefined();
  })
});
