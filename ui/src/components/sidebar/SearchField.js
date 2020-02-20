import React from 'react';
import { useStore } from '../../flux/store';
import { applySearchFilter } from '../../flux/actions';

import '../../styles/SearchField.scss'

function SearchField({placeholder}) {

  const { state, dispatch } = useStore(); 

  return (
    <div className="search-field">
      <input type="text"
        placeholder={placeholder}
        onChange={ (e) => applySearchFilter(dispatch, e.target.value)}
        value={state.searchInput} />
    </div>
  );
}

export default SearchField;
