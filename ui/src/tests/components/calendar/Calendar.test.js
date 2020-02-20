import React from 'react';
import Calendar from '../../../components/calendar/Calendar';
import CalendarRow from '../../../components/calendar/CalendarRow';
import CalendarHeader from '../../../components/calendar/CalendarRow';
import * as selectors from '../../../services/selectors';
import * as actions from '../../../flux/actions';
import { getMockState } from '../../__mocks/state.mock.js';
import {
  mockGetMonthsInSeason,
  mockSortVegetables,
  mockFilterVegetables,
  mockBuildSegmentMap,
  mockBuildCellMap
} from '../../__mocks/selectors.mock.js';
import { shallow } from 'enzyme';

describe('Calendar', () => {


  let mockAppState = {};
  let mockFetchMarketData = jest.fn(() => true);
  beforeEach(() => {
    mockAppState = getMockState();
    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => {
        return {state: mockAppState, dispatch: () => true}
      });
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest.spyOn(selectors, 'sortVegetables').mockImplementation(mockSortVegetables);
    jest.spyOn(selectors, 'filterVegetables').mockImplementation(mockFilterVegetables);
    jest.spyOn(selectors, 'getMonthsInSeason').mockImplementation(mockGetMonthsInSeason);
    jest.spyOn(selectors, 'buildCellMap').mockImplementation(mockBuildCellMap);
    jest.spyOn(actions, 'fetchMarketData') .mockImplementation(mockFetchMarketData);


  });

  it('should render if the market data is loaded', () => {
    let wrapper = shallow(<Calendar />);
    expect(wrapper).toBeDefined();
    expect(wrapper.find('.calendar')).toBeTruthy();
    expect(wrapper.find('.calendar-body')).toBeTruthy();
  });

  it('should fetch the marketData', () => {
    let wrapper = shallow(<Calendar />);
    expect(mockFetchMarketData).toHaveBeenCalled();
  });

  it('should filter the vegetable results', () => {
    let wrapper = shallow(<Calendar />);
    expect(mockFilterVegetables).toHaveBeenCalled();
  });

  it('should sort the vegetable results', () => {
    let wrapper = shallow(<Calendar />);
    expect(mockSortVegetables).toHaveBeenCalled();
  });

  it('should build the cell map', () => {
    let wrapper = shallow(<Calendar />);
    expect(mockBuildCellMap).toHaveBeenCalled();
  });

  it('should not render if the data has not loaded', () => {
    let wrapper = shallow(<Calendar />);
    mockAppState.marketData = null;
    expect(wrapper.find('.loading')).toBeTruthy();
  });
});
