import React from 'react';
import { Store } from '../../flux/store';
import { applySearchFilter } from '../../flux/actions';

import '../../styles/SearchField.scss'

function SearchField({placeholder}) {

  const { state, dispatch } = React.useContext(Store);

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
