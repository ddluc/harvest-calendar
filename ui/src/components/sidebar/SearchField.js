import React from 'react';
import { Store } from '../../flux/store';

import '../../styles/SearchField.scss'

function SearchField({placeholder}) {

  const { state } = React.useContext(Store);

  return (
    <div className="search-field">
      <input type="text" placeholder={placeholder} />
    </div>
  );
}

export default SearchField;
