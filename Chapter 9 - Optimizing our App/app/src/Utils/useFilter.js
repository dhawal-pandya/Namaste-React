const useFilter = (search, resData) =>
  search !== '' &&
  resData.filter(
    (res, search) =>
      res.data.name.toLowerCase().includes(search.toLowerCase()) ||
      res.data.cuisines.join('').toLowerCase().includes(search.toLowerCase())
  );

export default useFilter;
