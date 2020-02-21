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

  let mockFetchMarketData = jest.fn(() => true);

  beforeEach(() => {
    jest.spyOn(React, 'useEffect').mockImplementation(f => f());
    jest.spyOn(selectors, 'sortVegetables').mockImplementation(mockSortVegetables);
    jest.spyOn(selectors, 'filterVegetables').mockImplementation(mockFilterVegetables);
    jest.spyOn(selectors, 'getMonthsInSeason').mockImplementation(mockGetMonthsInSeason);
    jest.spyOn(selectors, 'buildCellMap').mockImplementation(mockBuildCellMap);
    jest.spyOn(actions, 'fetchMarketData') .mockImplementation(mockFetchMarketData);
  });

  it('should render if the market data is loaded', () => {
    buildContextSpy(getMockState());
    let wrapper = shallow(<Calendar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should not render if the data has not loaded', () => {
    let mockAppState = getMockState();
    mockAppState.marketData = null;
    buildContextSpy(mockAppState);
    let wrapper = shallow(<Calendar />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should fetch the marketData', () => {
    buildContextSpy(getMockState());
    let wrapper = shallow(<Calendar />);
    expect(mockFetchMarketData).toHaveBeenCalled();
  });

  it('should filter the vegetable results', () => {
    buildContextSpy(getMockState());
    let wrapper = shallow(<Calendar />);
    expect(mockFilterVegetables).toHaveBeenCalled();
  });

  it('should sort the vegetable results', () => {
    buildContextSpy(getMockState());
    let wrapper = shallow(<Calendar />);
    expect(mockSortVegetables).toHaveBeenCalled();
  });

  it('should build the cell map', () => {
    let wrapper = shallow(<Calendar />);
    expect(mockBuildCellMap).toHaveBeenCalled();
  });


});
