import { useState, useEffect } from 'react';
import { SWIGGY_API_URL_MENU } from '../../config';

const useRestaurantMenu = (id) => {
  const [restaurant, setRestauraunt] = useState({});

  useEffect(() => {
    getRestaurantInfo(id);
  }, []);

  async function getRestaurantInfo(id) {
    const data = await fetch(SWIGGY_API_URL_MENU + id);
    const json = await data.json();
    setRestauraunt(json.data);
  }
  return restaurant;
};

export default useRestaurantMenu;
