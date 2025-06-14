const transformToObject = (arr) => {
  const obj = {};
  arr.forEach((el) => {
    obj[el] = el;
  });
  return obj;
};
console.log(transformToObject(['a', 17.1, 'John Doe'])); // ==> { a: 'a', '17.1': 17.1, 'John Doe': 'John Doe' }
