import React from 'react';
import CalendarHeader from '../../../components/calendar/CalendarHeader';
import * as Store from '../../../flux/store';
import { getMockState } from '../../__mocks/state.mock.js';
import {
  mockBuildSegmentMap,
  mockGetMonthsInSeason,
  mockBuildCellMap
} from '../../__mocks/selectors.mock.js';
import { shallow } from 'enzyme';

describe('CalendarHeader', () => {

  let mockAppState = getMockState();

  beforeEach(() => {
    jest
      .spyOn(Store, 'useStore')
      .mockImplementation(() => {
        return {state: mockAppState, dispatch: () => true}
      });
  });

  it('should render', () => {
    
    const props = {
      segmentMap: mockBuildSegmentMap(),
      cellMap: mockBuildCellMap(),
      months: mockGetMonthsInSeason()
    };

    let wrapper = shallow(<CalendarHeader {...props} />);
    expect(wrapper).toBeDefined();
  })
});
