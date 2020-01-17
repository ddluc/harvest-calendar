import React from 'react';
import { Store } from '../../flux/store';

function SearchField() {

  const { state } = React.useContext(Store);

  return (
    <input type="text />
  );
}

export default SearchField;
