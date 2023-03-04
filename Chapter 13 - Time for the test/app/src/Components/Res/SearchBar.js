import React, { useContext } from 'react';

import UserContext from '../../Utils/UserContext';

const SearchBar = (props) => {
  const handleChange = (e) => {
    e.preventDefault;
    props.setSearch(e.target.value);
  };
  const { user, setUser } = useContext(UserContext);

  return (
    <div className='text-center p-2'>
      <input
        className='text-center m-1 p-1 w-7/12'
        data-testid='searchBar'
        type='text'
        placeholder='Search Here'
        onChange={handleChange}
        value={props.search}
      />
      {/* <input
        className='text-center m-1 p-1 w-7/12'
        type='text'
        onChange={(e) =>
          setUser({
            name: e.target.value,
            email: 'dhawalpandya.01@gmail.com',
          })
        }
        value={user.name}
      /> */}
      {/* An exercise in trying out changing useContext */}
    </div>
  );
};

export default SearchBar;
