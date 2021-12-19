/*
Pivot helper function
*/

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const pivot = (arr, start = Math.floor(arr.length / 2), end = arr.length - 1) => {
  let pivot = arr[start];
  let indexToSwap = 0;

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];
    if (current < pivot) {
      indexToSwap++
    }
  }
  swap(arr, start, indexToSwap);
  return indexToSwap;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))

/*
Quick sort time complexity: O(n log n) like merge sort;
O(log n) decompositions and O(n) comparisons;

if the array is sorted or we always keep picking the lowest or maximum pivot value,
the time complexity will be O(n ^ 2). because it will be O(n) decompositions * O(n) comparisons;

instead of picking the first element, always pick either a random element or the middle element.

Space complexity:
*/

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1) // not including the pivot
    quickSort(arr, pivotIndex + 1, right) // not including the pivot
  }
  return arr;
}

console.log(quickSort([4, 8, 100,0, 500, 2, 1, 5, 7, 6, 3]))
