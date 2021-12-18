/*
Bubble Sort: Place the biggest value in sorted position first

start looping with i at the end
inner loop from beginning
if arr is greater than the next one swap
else keep looping
return sorted arr
*/

// Not optimized solution. Time complexity O(n^2)
const bubbleS = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}


// Optimized solution. Time complexity O(n);
const bubbleSort = (arr) => {
  let noSwap;
  for (let i = arr.length; i >= 0; i--) {
    noSwap = true
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

// console.log(bubble([8,1,10,3,100,5]))
