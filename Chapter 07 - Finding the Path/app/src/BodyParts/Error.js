import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className='error'>
      <h1>
        {err?.status} : {err?.statusText}
      </h1>
      <p>{err?.error?.message}</p>
      <h2>Bruh</h2>
    </div>
  );
};

export default Error;
