import React, { useState } from 'react';
import classnames from 'classnames';

import './styles.css';

function SearchField() {
  const [searchText, setSearchText] = useState('');

  return (
    <div className="searchFieldWrapper">
      <input
        className={'searchField'}
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
      />
      <input
        type="button"
        onClick={e => setSearchText(searchText && '')}
        className={classnames('searchButton', searchText && 'clear')}
        value="Search"
      />
    </div>
  );
}

export default SearchField;
