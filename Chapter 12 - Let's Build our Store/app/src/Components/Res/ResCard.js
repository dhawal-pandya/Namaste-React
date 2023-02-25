import React from 'react';

import { IMG_CDN_URL } from '../../../config';

const ResCard = (props) => {
  return (
    <>
      <div className='m-3 min-h-max text-s border-solid border-white border-2 rounded p-3 w-80 flex flex-col justify-start hover:border-double hover:border-gray-400 hover:border-4'>
        <h3
          className='text-white h-9 text-center font-extrabold text-2xl
          '
        >
          {props.resData.name}
        </h3>
        {props.resData.cloudinaryImageId ? (
          <img
            className='rounded-sm min-h-max'
            src={`${IMG_CDN_URL}${props.resData.cloudinaryImageId}`}
          />
        ) : null}
        <h4 className='text-white h-9 text-xl italic'>
          {props.resData.cuisines.slice(0, 3).join(', ')}
        </h4>
        <h4 className='text-white h-5 text-sm text-right'>
          {props.resData.minDeliveryTime} Minutes Delivery
        </h4>
      </div>
    </>
  );
};

export default ResCard;
