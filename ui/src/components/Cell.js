import React from 'react';

function Cell ({mPos, cellIndex, id}) {

  if (mPos.status === 'none' || mPos.status === 'off') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex}`}>—</div>);
  } else if (mPos.status === 'early') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex}`}>E</div>);
  } else if (mPos.status === 'peak') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex}`}>P</div>);
  } else if (mPos.status === 'late') {
    return (<div id={id} className={`calendar-cell cell-${cellIndex}`}>L</div>);
  } else {
    return (<div className={`calendar-cell`}>—</div>);
  }

};

export default Cell;
