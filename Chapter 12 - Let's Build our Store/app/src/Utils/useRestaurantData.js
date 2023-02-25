import { useEffect, useState } from 'react';
import fResData, { SWIGGY_API_URL_RESTAURANTS } from '../../config';

const useRestaurantData = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(SWIGGY_API_URL_RESTAURANTS);
    const json = await data.json();

    setResData(json?.data?.cards[2]?.data?.data?.cards);

    // Sometimes the number is different... try all 3 [0, 1, 2]
  }

  return resData;
};

export default useRestaurantData;
