import React, { useState, useEffect } from 'react';
import classnames from 'classnames';

import SearchResult from './SearchResult';
import './styles.css';

function SearchField() {
  const [searchText, setSearchText] = useState('');
  const [ships, setShips] = useState([]);
  const [initSearch, setInitSearch] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetch(`http://localhost:4000/api/ships/${searchText}`);
        const data = await results.json();
        searchText && setShips(data);
        setInitSearch(false);
      } catch (error) {
        new Error(error);
      }
    };

    initSearch && fetchData();
  }, [initSearch, searchText]);

  useEffect(() => {
    setShips([]);
  }, [searchText]);

  return (
    <div className="searchFieldWrapper">
      <input
        className={'searchField'}
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={e => setSearchText(e.target.value)}
        onKeyDown={e => e.keyCode === 13 && setInitSearch(true)}
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
