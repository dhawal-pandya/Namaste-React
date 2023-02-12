import React from 'react';

import { IMG_CDN_URL } from '../../config';

const ResCard = (props) => {
  let shimmer = props.shimmer;
  return (
    <>
      {shimmer ? (
        <div className='m-3 text-s border-solid border-white border-2 rounded p-3 w-80 flex flex-col justify-start hover:border-double hover:border-gray-400 hover:border-4'></div>
      ) : (
        <div className='m-3 text-s border-solid border-white border-2 rounded p-3 w-80 flex flex-col justify-start hover:border-double hover:border-gray-400 hover:border-4'>
          <h3
            className='text-white text-center font-extrabold text-2xl
          '
          >
            {props.resData.name}
          </h3>
          {props.resData.cloudinaryImageId ? (
            <img
              className='resImage'
              src={`${IMG_CDN_URL}${props.resData.cloudinaryImageId}`}
            />
          ) : null}
          <h4 className='text-white text-xl italic'>
            {props.resData.cuisines.join(', ')}
          </h4>
          <h4 className='text-white text-sm text-right'>
            {props.resData.minDeliveryTime} Minutes Delivery
          </h4>
        </div>
      )}
    </>
  );
};

export default ResCard;
