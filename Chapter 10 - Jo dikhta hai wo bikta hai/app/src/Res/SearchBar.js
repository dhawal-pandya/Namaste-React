import React from 'react';

const SearchBar = (props) => {
  const handleChange = (e) => {
    e.preventDefault;
    props.setSearch(e.target.value);
  };

  return (
    <div className='text-center p-2'>
      <input
        className='text-center m-1 p-1 w-7/12'
        type='text'
        placeholder='Search Here'
        onChange={handleChange}
        value={props.search}
      />
    </div>
  );
};

export default SearchBar;
