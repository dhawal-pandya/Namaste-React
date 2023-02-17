import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { IMG_CDN_URL } from '../../config';

const ResMenu = () => {
  const params = useParams();
  console.log(params.id);
  const [restaurant, setRestauraunt] = useState(null);
  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    setIsClicked(!isClicked);
  };

  const correctPrice = (num) => {
    num = num / 100;
    return `₹${String(num)}`;
  };

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      'https://www.swiggy.com/dapi/menu/v4/full?lat=20.5992349&lng=72.9342451&menuId=' +
        params.id
    );
    const json = await data.json();
    console.log(json.data);
    setRestauraunt(json.data);
  }

  return (
    <div className='resMenuWrapper'>
      <div className='resDetails' onClick={clickHandle}>
        <img
          className='resMenuImg'
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=''
        />
        <div className='resMenuText'>
          <h2 className='resMenuName'>{restaurant?.name}</h2>
          <div>City: {restaurant?.city}</div>
          <div>Ratings: {restaurant?.avgRating} ⭐</div>
        </div>
      </div>

      {isClicked && (
        <div className='resMenuDetails'>
          <h2>We got..</h2>
          <ul className='menuList'>
            {restaurant &&
              Object.values(restaurant?.menu?.items).map((item) => {
                if (correctPrice(item.price) !== '₹0') {
                  return (
                    <li className='menuItems' key={item.id}>
                      {item.name} - {correctPrice(item?.price)}
                    </li>
                  );
                }
              })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ResMenu;
