import React, { useState } from 'react';

import './styles.css';

function SearchField() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="searchFieldWrapper">
      <input
        className={'searchField'}
        type="search"
        placeholder="Search"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
    </div>
  );
}

export default SearchField;
