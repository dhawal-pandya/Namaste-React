import { useState } from 'react';
import { useParams } from 'react-router-dom';

import { IMG_CDN_URL } from '../../../config';

import { useDispatch } from 'react-redux';
import { addItem } from '../../Store/cartSlice';

import useRestaurantMenu from '../../Utils/useRestaurantMenu';

const ResMenu = () => {
  const params = useParams();

  let restaurant = useRestaurantMenu(params.id);

  const [isClicked, setIsClicked] = useState(false);

  const clickHandle = () => {
    setIsClicked(!isClicked);
  };

  const dispatch = useDispatch();

  const correctPrice = (num) => {
    num = num / 100;
    return `₹${String(num)}`;
  };

  return (
    <div className='flex flex-col text-white text-center align-middle p-7 m-0 font-sans bg-gradient-to-b from-black to-zinc-800'>
      <div
        className='flex mx-4 my-2 border-solid border-white border-2 hover:border-double hover:border-gray-400 hover:border-4'
        onClick={clickHandle}
      >
        <img
          className='ml-4 w-5/12 rounded-2xl py-4'
          src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          alt=''
        />
        <div
          data-testid='menuButton'
          className='flex flex-col justify-center p-4'
        >
          <div className='text-xl text-center p-3 lg:text-4xl lg:p-7'>
            {restaurant?.name}
          </div>
          <div className='px-3 text-sm lg:text-2xl lg:p-7'>
            City: {restaurant?.city}
          </div>
          <div className='px-3 text-sm lg:text-2xl lg:p-7'>
            Ratings: {restaurant?.avgRating} ⭐
          </div>
        </div>
      </div>

      {isClicked && (
        <div className='text-center'>
          <h2>We got..</h2>
          <ul className='flex flex-wrap justify-center'>
            {restaurant &&
              Object.values(restaurant?.menu?.items).map((item) => {
                if (correctPrice(item.price) !== '₹0') {
                  return (
                    <li
                      className='rounded mx-4 my-2 px-4 py-2 border-solid border-white border-2 hover:border-double hover:border-gray-400 hover:border-4'
                      key={item.id}
                      data-testid='menuItem'
                      onClick={() => {
                        dispatch(addItem(item));
                      }}
                    >
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
