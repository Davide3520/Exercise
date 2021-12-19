/*
Time Complexity: O(n log n),

the log n part is the number of time we split n as n grows. Why (n log n)? every time we split the array
we have n log n comparison;

Space Complexity: O(n);
*/


/*
Sorting Function for Merging 2 sorted arrays
*/
const mergeFunct = (arr1, arr2) => {
  let arr = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      arr.push(arr1[i]);
      i++;

    } else {
      arr.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    arr.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    arr.push(arr2[j]);
    j++
  }
  return arr;
}
// console.log(mergeFunct([1,10,50], [2,14,99,100]))

const mergeSort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  let half = Math.floor(arr.length / 2);
  let left = arr.slice(0, half);
  let right = arr.slice(half)
  let leftSlice = mergeSort(left)
  let rightSlice = mergeSort(right);
  return mergeFunct(leftSlice, rightSlice)
}

console.log(mergeSort([55,99,12,2,100,25]))
