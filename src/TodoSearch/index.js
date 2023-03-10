import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
  const { searchValue, setSearchValue } = React.useContext(TodoContext);
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return (
    <div className='search'>
    <input
      className="TodoSearch"
      placeholder="Find your ToDo"
      value={searchValue}
      onChange={onSearchValueChange}
    />
    </div>
    
  );
}

export { TodoSearch };
