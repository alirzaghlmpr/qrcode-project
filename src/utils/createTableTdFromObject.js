export const createTableTdFromObject = (object, className) => {
  let datas = [];
  for (const key in object)
    datas.push(<td className={className && className}>{object[key]}</td>);
  return datas;
};

export default createTableTdFromObject;
