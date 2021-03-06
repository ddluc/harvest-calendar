import React from 'react';
import CalendarHeader from '../../../components/calendar/CalendarHeader';
import { getMockState } from '../../__mocks/state.mock.js';
import {
  mockBuildSegmentMap,
  mockGetMonthsInSeason,
  mockBuildCellMap
} from '../../__mocks/selectors.mock.js';
import { shallow } from 'enzyme';

describe('CalendarHeader', () => {

  let mockAppState = getMockState();

  it('should render', () => {
    buildContextSpy(mockAppState);
    const props = {
      segmentMap: mockBuildSegmentMap(),
      cellMap: mockBuildCellMap(),
      months: mockGetMonthsInSeason()
    };

    let wrapper = shallow(<CalendarHeader {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});
