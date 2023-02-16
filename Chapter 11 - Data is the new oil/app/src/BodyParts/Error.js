import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
  const err = useRouteError();
  // console.log(err);
  return (
    <div className='text-center text-white flex flex-col align-middle justify-center p-7 h-screen m-0 font-sans bg-gradient-to-b from-black to-zinc-800'>
      <div>
        {err?.status} : {err?.statusText}
      </div>
      <div>{err?.error?.message}</div>
      <div
        className='hover:font-bold'
        onClick={() => {
          window.location.reload();
        }}
      >
        Bruh
      </div>
    </div>
  );
};

export default Error;
