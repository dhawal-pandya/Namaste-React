import React from 'react';

import ResCard from './ResCard';
const ResList = (props) => {
  return (
    <div className='resListWrapper'>
      {props.resData.map((res) => (
        <ResCard resData={res.data} key={res.data.uuid} />
      ))}
    </div>
  );
};

export default ResList;
