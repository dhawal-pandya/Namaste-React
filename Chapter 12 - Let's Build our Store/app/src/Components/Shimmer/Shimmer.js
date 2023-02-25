import React from 'react';

import ResList from '../Res/ResList';

const Shimmer = (props) => {
  return (
    <div className='flex flex-wrap justify-center'>
      <ResList resData={props.resData} />
    </div>
  );
};

export default Shimmer;
