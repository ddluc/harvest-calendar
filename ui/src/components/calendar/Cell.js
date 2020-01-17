import React from 'react';

function Cell ({mPos, cellIndex, id, isActive}) {

  if (mPos.status === 'none' || mPos.status === 'off') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex} ${isActive}`}>—</div>);
  } else if (mPos.status === 'early') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex} ${isActive}`}>E</div>);
  } else if (mPos.status === 'peak') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex} ${isActive}`}>P</div>);
  } else if (mPos.status === 'late') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex} ${isActive}`}>L</div>);
  } else {
    return (<div className={`calendar-cell`}>—</div>);
  }

};

export default Cell;
