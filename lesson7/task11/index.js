function squareArray(arr) {
  if (!Array.isArray(arr)) {
    return null;
  }
  return arr.map((el) => {
    return el * el;
  });
}
