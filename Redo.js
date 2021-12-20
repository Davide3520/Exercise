/*
Searching Algorithms
*/

/*
Binary search

Write a function that accepts a sorted array
and a value.
create 2 variables left and rigth
loop over and over
loop only if the left < end
value too small? ++
value too big? --

if not value return -1

*/

// const binarySearch = (arr, val) => {

// }
// console.log(binarySearch([1,2,3,4,5,6,7,8,9], 7)) // 6

//-------------------------

/*

Merge Sort
*/
// Swap helper function
// const swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// }

// const mergeFunc = (arr1, arr2) => {

// }

// // console.log(mergeFunc([2,4,5,8], [1,3,6]))

// const mergeSort = (arr) => {

// }

// // console.log(mergeSort([55,20,36,49,1,2,5,10]))

// // ///////////////////////////////////////


// const pivot = (arr, mid = Math.floor(arr.length / 2), end = arr.length - 1) => {

// }

// // console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

// const quickSort = (arr, left = 0, rigth = arr.length - 1) => {

// }

// console.log(pivot([[4, 8, 100,0, 500, 2, 1, 5, 7, 6, 3]]))
// console.log(quickSort([4, 8, 100,0, 500, 2, 1, 5, 7, 6, 3]))


// /////////////////////////////////

// const getDigit = (num, i) => {
//   return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
// }

// const digitCount = (num) => {
//   let string = String(num);
//   return string.length;
// }


// const maxDigit = (arr) => {
//   let max = 0;

//   for (let i = 0; i < arr.length; i++) {
//     max = Math.max(max, digitCount(arr[i]));
//   }
//   return max;
// }

// const radixSort = (arr) => {

// }

// console.log(radixSort([11,12,2,333,44444]))
