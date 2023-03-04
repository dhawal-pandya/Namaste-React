import React from 'react';

import { IMG_CDN_URL } from '../../../config';

const ResCard = (props) => {
  return (
    <>
      <div className='m-3 min-h-max h-screen/3 text-s border-solid border-white border-2 rounded p-3 w-80 flex flex-col justify-start hover:border-double hover:border-gray-400 hover:border-4'>
        <h3
          className='text-white h-9 text-center font-extrabold text-2xl pb-1
          '
        >
          {props.resData.name}
        </h3>
        <div className='flex py-6'>
          {props.resData.cloudinaryImageId ? (
            <img
              className='rounded-sm h-20 w-40 aspect-auto'
              src={`${IMG_CDN_URL}${props.resData.cloudinaryImageId}`}
            />
          ) : null}
          <h4 className='text-white text-center p-3 h-9 text-xl italic'>
            {props.resData.cuisines.slice(0, 3).join(', ')}
          </h4>
        </div>
        <h4 className='text-white h-1 text-sm text-center'>
          {props.resData.minDeliveryTime} Minutes Delivery
        </h4>
      </div>
    </>
  );
};

export default ResCard;
