const removeZeros = (str) => {
  let parts = str.split("/");

  let year = parts[0];
  let month = parseInt(parts[1], 10).toString();
  let day = parseInt(parts[2], 10).toString();

  return `${year}/${month}/${day}`;
};

export default removeZeros;
