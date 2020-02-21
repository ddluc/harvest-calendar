import React from 'react';
import CalendarRow from '../../../components/calendar/CalendarRow';
import * as selectors from '../../../services/selectors';
import { getMockState } from '../../__mocks/state.mock.js';
import {
  mockBuildSegmentMap,
  mockGetMonthsInSeason,
  mockBuildCellMap
} from '../../__mocks/selectors.mock.js';
import { shallow } from 'enzyme';

describe('CalendarRow', () => {

  it('should render', () => {
    let mockState = getMockState();
    // Random index vegetable array
    let vegetableIndex = 10;
    buildContextSpy(mockState);
    const props = {
      key: 1,
      months: mockGetMonthsInSeason(),
      vegetable: mockState.marketData.vegetables[vegetableIndex],
      cellMap: mockBuildCellMap(),
    };

    let wrapper = shallow(<CalendarRow {...props} />);
    expect(wrapper).toMatchSnapshot();
  })
});
