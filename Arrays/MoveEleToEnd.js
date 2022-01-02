/*
You are given an array of integer. write a function that moves all instances of that integer in the array to the end fo the array and return the array. the function should perform this in place (Mutate the input array);
*/

// Time: O(n) where n is the length of the array | Space: O(1);
const moveToEnd = (arr, num) => {
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    while (i < j && arr[j] === num) j--;
    if (arr[i] === num) swap(i, j, arr);
    i++;
  }
  return arr;
}

const swap = (i, j, arr) => {
  const temp = arr[j];
  arr[j] = arr[i];
  arr[i] = temp;
}

console.log((moveToEnd([2, 1, 2, 2, 2, 3, 4, 2], 2)))
