import React from 'react';
import ExitIcon from '../icons/exit';
import '../../styles/Button.scss'

function Button ({label, type, active, onClick}) {

  let activeClass = active ? 'active' : '';

  return (
    <button className={`${type} ${activeClass}`} onClick={onClick}>
      { active ? <ExitIcon /> : '' }
      {label}
    </button>
  );

}

export default Button;
