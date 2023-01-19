import React from 'react';

const SearchBar = (props) => {
  const handleChange = (e) => {
    e.preventDefault;
    props.setSearch(e.target.value);
  };

  return (
    <div className='searchBarWrapper'>
      <input
        type='text'
        placeholder='Search...'
        onChange={handleChange}
        value={props.search}
      />
    </div>
  );
};

export default SearchBar;
