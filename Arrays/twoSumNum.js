/*
Write a function that takes a non empty array of distincts integers and an integer representing a target sum. If any of two number in the input array sum up to the target, the function should return them in  an array in any order. if no 2 numbers sum the function should return an empty array;
*/

const twoSums = (arr, target) => {
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if ((arr[i] + arr[j]) === target) {
        res.push(arr[i], arr[j]);
      }
    }
  }
  return res;
}

console.log(twoSums([3, 5, -4, 8, 11, 1, -1, 6], 10)) //[11, -1]
console.log(twoSums([1,2, 3], 20)) //[]
console.log(twoSums([1,2,3], 5)) // [2, 3]
