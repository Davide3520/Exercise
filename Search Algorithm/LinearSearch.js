/*
Write a function that accepts an array
and a value.
loop thorugh the array and check if the current element is equal to the value given.
it is return the index else return -1
*/

// O(n) time complexity; As the size of the input grows the time increase.

const linearSearch = (arr, val) => {

  for (let i = 0; i < arr.length; i++) {
    let num = arr[i];
    if (num === val) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([1,2,3,4], 2)) // 1
console.log(linearSearch([3,7,8,9,10], 9)) // 3
console.log(linearSearch([1,2,3], 4)) // -1
