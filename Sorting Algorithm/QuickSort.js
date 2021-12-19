/*
Pivot helper function
*/

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const pivot = (arr, start = 0) => {
  let pivot = arr[start];
  let indexToSwap = start;

  for (let i = start + 1; i < arr.length; i++) {
    let current = arr[i];
    if (current < pivot) {
      indexToSwap++
      swap(arr, indexToSwap, i);
    }
  }
  swap(arr, start, indexToSwap);
  console.log(arr)
  return indexToSwap;
}

console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]))
