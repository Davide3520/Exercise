/*

Write a function that accepts a sorted array
and a value.
create 2 variables left and rigth
loop over and over
loop only if the left < end
value too small? ++
value too big? --

if not value return -1

*/

const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    let half = Math.floor(arr.length / 2);
    if (arr[half] === val) {
      return half;
    }
    if (arr[left] < val) {
      left++
      if (arr[left] === val) {
        return left;
      }
    }
    if (arr[right] > val) {
      right--
      if (arr[right] === val) {
        return right;
      }
    }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7)) // 6
console.log(binarySearch([1,2,3,4,5], 3)) //
console.log(binarySearch([1,2,3,4], 2))
console.log(binarySearch([1,2,3,4], 5))


