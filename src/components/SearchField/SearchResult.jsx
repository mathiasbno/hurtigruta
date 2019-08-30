import React from 'react';

import './styles.css';

function SearchResult(props) {
  return (
    <ul className="resultList">
      {props.ships.map((ship) => (
        <li key={ship.id}>{ship.name}</li>
      ))}
    </ul>
  );
}

export default SearchResult;
