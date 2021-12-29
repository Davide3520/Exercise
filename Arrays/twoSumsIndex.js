/*
PROMPT:
Given an array of integers, return the indices of the two numbers that add
up to a given target.


Step 1:  ASK ABOUT EDGE CASE WHEN DEALING WITH INTEGERS

- Are all numbers positive or there can be negative numbers?
- Are there duplicate numbers in the array?
- Will there always be a solution available?
- What do we return if there is no solution available?

Step 2: WRITE TEST CASE BASED ON THE QUESTIONS ASKED.

STEP 3: WRITE OUT THE SOLUTION WITHOUT ANY CODE INVOLVED.

STEP 4: WRITE OUT THE SOLUTION IN CODE.
*/

/*
BRUTE FORCE
*/

/*

twoSum([1,2,3,8,4], 12) [3,4]
twoSum([1], 1) null
twoSum([], 5) null
twoSum([1,2,3], 25) null
twoSum([1,2], 3) [0, 1]

*/

// const twoSums = (arr, tar) => {
//   for (let i = 0; i < arr.length; i++) {
//       let numToFind = tar - arr[i]
//     for (let j = i + 1; j < arr.length; j++) {
//       if (numToFind === arr[j]) {
//         return [i, j];
//       }
//     }
//   }
//   return null;
// }

// const twoSums = (arr, target) => {
//   let hashMap = {};
//   for (let i = 0; i < arr.length; i++) {
//     let current = hashMap[arr[i]];
//     if (current >= 0) {
//       return [current, i];
//     }else {
//       let ntf = target - arr[i];
//       hashMap[ntf] = i;
//     }
//   }
//   return null;
// }

// console.log(twoSums([1,5,3,12, 9, 2], 11)) // [4, 5];
// console.log(twoSums([1,2,3,4], 25)) // null;
// console.log(twoSums([1], 1)) // null;
// console.log(twoSums([], 5)) // null;
// console.log(twoSums([1,2], 3)) // [0, 1];

