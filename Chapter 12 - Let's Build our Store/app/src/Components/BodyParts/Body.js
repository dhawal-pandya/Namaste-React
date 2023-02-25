import React, { useEffect, useState } from 'react';

import fResData, { SWIGGY_API_URL_RESTAURANTS } from '../../../config';

import SearchBar from '../Res/SearchBar';
import ResList from '../Res/ResList';
import Shimmer from '../Shimmer/Shimmer';

const Body = () => {
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [filResData, setFilResData] = useState([]);
  const [resData, setResData] = useState([]);

  async function getRestaurants() {
    setIsLoading(true);
    const data = await fetch(SWIGGY_API_URL_RESTAURANTS);
    const json = await data.json();
    setResData(json?.data?.cards[2]?.data?.data?.cards);
    setFilResData(json?.data?.cards[2]?.data?.data?.cards);
    setIsLoading(false);
    // Sometimes the number is different... try all 3 [0, 1, 2]
  }

  const filterFunction = (s) => {
    setIsLoading(true);
    if (s !== '') {
      setFilResData(
        resData.filter((res) => {
          console.log(s);
          return (
            res.data.name.toLowerCase().includes(s.toString().toLowerCase()) ||
            res.data.cuisines
              .join('')
              .toLowerCase()
              .includes(search.toLowerCase())
          );
        })
      );
    } else {
      setFilResData(resData);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    console.log('search call');
    filterFunction(search);
  }, [search]);

  return (
    <div className='m-0 font-sans bg-gradient-to-b from-black to-zinc-800'>
      <SearchBar search={search} setSearch={setSearch} />
      {isLoading ? (
        <Shimmer resData={fResData} />
      ) : (
        <ResList resData={filResData} />
      )}
    </div>
  );
};
export default Body;
