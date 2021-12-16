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

// O(log n) = every time we double the size of n we add an extra step!


const binarySearch = (arr, val) => {
  let left = 0;
  let right = arr.length - 1;
  let half = Math.floor((left + right) / 2);

  while (arr[half] !== val && left <= right) {
    if (arr[half] < val) {
      left++
    } else if (arr[half] > val){
      right--
    }
    half = Math.floor((left + right) / 2);
  }
  if (arr[half] === val) {
    return half;
  }
  return -1;
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7)) // 6
console.log(binarySearch([2,5,6,9,13,15,28,30], 5))
console.log(binarySearch([1,2,3,4,5], 3)) //
console.log(binarySearch([1,2,3,4], 2))
console.log(binarySearch([1,2,3,4], 5))


