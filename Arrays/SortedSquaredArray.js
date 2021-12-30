/*
Write a function that takes a non empty array of integers that are sorted in ascending order and return a new array o e same length with the squares of the original integers also sorted in ascending order.
*/
/* BRUTE
Time:  O(n log n);
Space: O(1)
*/
// const squaredArr = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] ** 2;
//   }
//   return arr.sort((a,b) => a - b);
// }

const squaredArr = (arr) => {
  let res = [];
  let left = 0;
  let right = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    let smallest = arr[left];
    let larger = arr[right];

    if (Math.abs(smallest) > Math.abs(larger)) {
      res[i] = smallest * smallest;
      left++;
    } else {
      res[i] = larger * larger;
      right--;
    }
  }
  return res;
}
console.log(squaredArr([1,2,3,5,6,8,9])) // [1,4,9,25, 36, 64, 81]
