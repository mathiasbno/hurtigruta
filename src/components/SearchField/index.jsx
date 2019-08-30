import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SearchResult from './SearchResult';
import './styles.css';

function SearchField() {
  const [searchText, setSearchText] = useState('');
  const [ships, setShips] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      if (!searchText) setShips([]);

      try {
        const results = await fetch(`http://localhost:4000/api/ships/${searchText}`);
        const data = await results.json();
        searchText && setShips(data);
      } catch (error) {
        new Error(error);
      }
    };

    fetchData();
  }, [searchText]);

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
        onClick={() => setSearchText('')}
        className={classnames('searchButton', searchText && 'clear')}
        value="Search"
      />
      <SearchResult ships={ships} />
    </div>
  );
}

export default SearchField;
