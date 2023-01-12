import React, { useEffect, useState } from 'react';

import SearchBar from '../Res/SearchBar';
import ResList from '../Res/ResList';

import { resDataList } from '../../config';

const Body = () => {
  const fullResData = resDataList;
  const filterFun = (res) => res.data.name.includes(search);

  const [resData, setResData] = useState(fullResData);
  const [search, setSearch] = useState('');

  useEffect(() => {
    let filteredData = fullResData.filter(filterFun);
    setResData(filteredData);
  }, [search]);

  return (
    <>
      <SearchBar search={search} setSearch={setSearch} />
      <ResList resData={resData} />
    </>
  );
};
export default Body;
