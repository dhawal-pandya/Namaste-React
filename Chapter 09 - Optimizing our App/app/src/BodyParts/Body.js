import React, { useEffect, useState } from 'react';

import fResData from '../../config';

import SearchBar from '../Res/SearchBar';
import ResList from '../Res/ResList';
import Shimmer from '../Shimmer/Shimmer';

import useRestaurantData from '../Utils/useRestaurantData';

const Body = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  // const [resData, setResData] = useState(fResData);

  const temp = useRestaurantData();

  // useEffect(() => {
  //   setIsLoading(true);
  //   setResData(temp);
  //   setIsLoading(false);
  // }, []);

  // Gotta fix this .... Gotta bring Shimmer back...
  // Cant Shimmer with Utils?

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {/* {temp ? <Shimmer resData={fResData} /> :  */}
      <ResList resData={temp} />
      {/* } */}
    </>
  );
};
export default Body;
