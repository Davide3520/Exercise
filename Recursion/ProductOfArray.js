/*

Write a function called productOfArray which takes
an array of numbers and return the product of all of them.

*/

const productOfArr = (arr) => {

  if (arr.length === 0) {
    return 1;
  }
  let num = arr.pop();
  return num *= productOfArr(arr)
}

console.log(productOfArr([1,2,3,4])) // 24
console.log(productOfArr([4,2,1])) // 8
console.log(productOfArr([2,3])) // 6
