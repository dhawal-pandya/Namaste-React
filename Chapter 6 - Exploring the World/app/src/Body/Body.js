import React, { useEffect, useState } from 'react';

import resDataList from '../../config';

import SearchBar from '../Res/SearchBar';
import ResList from '../Res/ResList';
import Shimmer from '../Shimmer/Shimmer';

const Body = () => {
  const filterFun = (res) =>
    res.data.name.toLowerCase().includes(search.toLowerCase());

  const [resData, setResData] = useState([]);
  const [filResData, setFilResData] = useState(resData);
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  async function getRestaurants() {
    setIsLoading(true);

    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING'
    );

    const json = await data.json();

    setResData(json?.data?.cards[2]?.data?.data?.cards);
    setFilResData(json?.data?.cards[2]?.data?.data?.cards);
    setIsLoading(false);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    let filteredData = resData.filter(filterFun);
    setFilResData(filteredData);
  }, [search]);

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      {isLoading ? (
        <Shimmer resData={resDataList} />
      ) : filResData ? (
        <ResList resData={filResData} />
      ) : null}
    </>
  );
};
export default Body;
