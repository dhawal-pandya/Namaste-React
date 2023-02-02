import React from 'react';

const SearchBar = (props) => {
  const handleChange = (e) => {
    e.preventDefault;
    props.setSearch(e.target.value);
  };

  return (
    <div className='searchBarWrapper'>
      <input
        className='searchBar'
        type='text'
        placeholder='Search Here'
        onChange={handleChange}
        value={props.search}
      />
    </div>
  );
};

export default SearchBar;
