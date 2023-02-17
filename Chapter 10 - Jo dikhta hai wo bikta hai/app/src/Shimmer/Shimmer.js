import React from 'react';

import ResCard from '../Res/ResCard';

const Shimmer = (props) => {
  return (
    <div className='resListWrapper'>
      {props.resData.map((res) => (
        <ResCard shimmer={true} resData={res.data} key={res.data.uuid} />
      ))}
    </div>
  );
};

export default Shimmer;
