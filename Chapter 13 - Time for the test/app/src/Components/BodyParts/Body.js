import React, { useEffect, useState } from 'react';

import fResData, { SWIGGY_API_URL_RESTAURANTS } from '../../../config';

import SearchBar from '../Res/SearchBar';
import ResList from '../Res/ResList';
import Shimmer from '../Shimmer/Shimmer';

const Body = () => {
  const [search, setSearch] = useState('');
  const [filResData, setFilResData] = useState([]);
  const [resData, setResData] = useState([]);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL_RESTAURANTS);
    const json = await data.json();
    setResData(json?.data?.cards[2]?.data?.data?.cards);
    setFilResData(json?.data?.cards[2]?.data?.data?.cards);
    // Sometimes the number is different... try all 3 [0, 1, 2]
  }

  const filterFunction = (s) => {
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
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  useEffect(() => {
    filterFunction(search);
  }, [search]);

  return (
    <div className='m-0 font-sans bg-gradient-to-b from-black to-zinc-800'>
      <SearchBar search={search} setSearch={setSearch} />
      {filResData.length === 0 && search.length === 0 ? (
        <Shimmer resData={fResData} />
      ) : filResData.length !== 0 ? (
        <ResList resData={filResData} />
      ) : (
        <div className='flex flex-row pt-56  justify-center text-white font-bold text-3xl h-screen '>
          No such restaurant
        </div>
      )}
    </div>
  );
};
export default Body;
