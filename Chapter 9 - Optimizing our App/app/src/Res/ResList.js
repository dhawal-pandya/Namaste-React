import React from 'react';
import { Link } from 'react-router-dom';

import ResCard from './ResCard';
const ResList = (props) => {
  return (
    <div className='resListWrapper'>
      {props.resData.map((res) => (
        <Link to={'ResMenu/' + res.data.id} key={res.data.uuid}>
          <ResCard resData={res.data} />
        </Link>
      ))}
    </div>
  );
};

export default ResList;
