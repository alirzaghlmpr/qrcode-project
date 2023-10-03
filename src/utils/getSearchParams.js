export const getSearchParams = (searchParamsObject, enumObject) => {
  let params = [];
  for (const key in enumObject) {
    if (searchParamsObject.get(enumObject[key]))
      params.push(
        `${enumObject[key]}=${searchParamsObject.get(enumObject[key])}`
      );
  }

  return params;
};

export default getSearchParams;
