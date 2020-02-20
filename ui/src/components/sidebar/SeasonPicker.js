import React from 'react';
import Button from './Button';
import { setActiveSeason } from '../../flux/actions';
import { useStore } from '../../flux/store';

import '../../styles/SeasonPicker.scss'

function SeasonPicker() {

  const { state, dispatch } = useStore(); 

  return (
    <div className="season-picker">
      <h4>Season</h4>
      <Button label={'Spring'} type={'primary'} active={state.activeSeason === 1} onClick={() => setActiveSeason(dispatch, 1)}/>
      <Button label={'Summer'} type={'primary'} active={state.activeSeason === 2} onClick={() => setActiveSeason(dispatch, 2)} />
      <Button label={'Fall'}   type={'primary'} active={state.activeSeason === 3} onClick={() => setActiveSeason(dispatch, 3)} />
      <Button label={'Winter'} type={'primary'} active={state.activeSeason === 4} onClick={() => setActiveSeason(dispatch, 4)}/>
    </div>
  );

}

export default SeasonPicker;
