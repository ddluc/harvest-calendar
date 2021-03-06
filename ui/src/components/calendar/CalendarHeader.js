import React from 'react';
import { Store } from '../../flux/store';
import { getMonthsInSeason, buildSegmentMap } from '../../services/selectors';
import { setActiveSegment } from '../../flux/actions';

import '../../styles/CalendarHeader.scss'

function CalendarHeader({segmentMap, cellMap, months}) {
    const { state, dispatch } = React.useContext(Store);
    // Build header cells
    // TODO: break into sub-component for shallow-rendered tests
    const header = months.map((month, index) => {
      let cellIndex = cellMap.header[month.key];
      let id = `header-month-${month.key}`;
      return (<div key={month.id} id={id} className={`header-cell cell-${cellIndex}`}>{month.label}</div>);
    });
    // Build subHeader cells
    // TODO: break into sub-component for shallow-rendered tests
    let subHeader = [];
    months.forEach((month) => {
      let cellIndex = 1;
      segmentMap.forEach((segment) => {
        let cellKey = `${month.key}-${segment.id}`
        let isActive = ( cellKey === `${state.activeMonth}-${state.activeSegment}`) ? 'active' : '';
        let cell = (
          <div key={cellKey} className={`sub-header-cell cell-${cellIndex} ${isActive}`} onClick={() => setActiveSegment(dispatch, month, segment)}>
            {segment.label} {isActive ? <span class="arrow">▼</span> : ''}
          </div>
        );
        subHeader.push(cell);
        cellIndex++;
      });
    })
    return (
      <div className="calendar-header">
        <div className="header-cell cell-label">Vegetable</div>
        { header }
        <div className="sub-header-cell cell-label"></div>
        { subHeader }
      </div>
    );
}

export default CalendarHeader;
