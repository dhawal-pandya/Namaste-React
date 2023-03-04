import React from 'react';

import ResCard from '../Res/ResCard';

const Shimmer = (props) => {
  return (
    <div className='flex flex-wrap justify-center' data-testid='shimmer'>
      {props.resData.map((res) => (
        <div key={res.data.uuid}>
          <ResCard resData={res.data} />
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
