/*
Write a function that takes a non empty array of integers that are sorted in ascending order and return a new array o e same length with the squares of the original integers also sorted in ascending order.
*/
/* BRUTE FORCE */
const squaredArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
  return arr.sort((a,b) => a - b);
}

console.log(squaredArr([1,2,3,5,6,8,9])) // [1,4,9,25, 36, 64, 81]
