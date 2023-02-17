import React from 'react';

import { IMG_CDN_URL } from '../../config';

const ResCard = (props) => {
  let shimmer = !props.shimmer;
  return (
    <>
      {shimmer ? (
        <div className='resCardWrapper'>
          <h3 className='resName'>{props.resData.name}</h3>
          <img
            className='resImage'
            src={`${IMG_CDN_URL}${props.resData.cloudinaryImageId}`}
          />
          <h4 className='resCuisine'>{props.resData.cuisines.join(' ')}</h4>
          <h4 className='deliveryTime'>
            {props.resData.minDeliveryTime} Minutes Delivery
          </h4>
        </div>
      ) : (
        <div className='resCardWrapper'></div>
      )}
    </>
  );
};

export default ResCard;
