function getSpecialNumbers(from, to) {
  // put your code here
  const arr = [];
  for (let i = from; i <= to; i += 1) {
    if (i % 3 === 0) {
      arr.push(i);
    }
  }
  return arr;
}
// examples
console.log(getSpecialNumbers(1, 10)); // ==> [3, 6, 9]
console.log(getSpecialNumbers(-10, 10)); // ==> [-9, -6, -3, 0, 3, 6, 9]
console.log(getSpecialNumbers(1, 2)); // ==> [ ]
