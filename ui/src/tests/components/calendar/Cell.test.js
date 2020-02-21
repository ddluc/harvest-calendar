import React from 'react';
import Cell from '../../../components/calendar/Cell';
import * as selectors from '../../../services/selectors';
import { getMockState } from '../../__mocks/state.mock.js';
import {
  mockBuildSegmentMap,
  mockGetMonthsInSeason,
  mockBuildCellMap
} from '../../__mocks/selectors.mock.js';
import { shallow } from 'enzyme';

describe('Cell', () => {

  let generateMockState = (mockAppState) => {
    jest
      .spyOn(React, 'useContext')
      .mockImplementation(() => {
        return {state: mockAppState, dispatch: () => true}
      });
  };

  it('should render', () => {
    let mockState = getMockState();
    // Select a random vegetable to test against
    let vegetableIndex = 20;
    let vegetable = mockState.marketData.vegetables[vegetableIndex];
    let mPos = vegetable.mPos[6];
    generateMockState(mockState);
    const props = {
      mPos,
      cellIndex: 1,
      id: 'MAR-1',
      isActive: false,
      showPrice: false
    };
    let wrapper = shallow(<Cell { ...props} /> );
    expect(wrapper).toMatchSnapshot();
  })

});
