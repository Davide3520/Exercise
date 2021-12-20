/*

Not a comparison Algorithms
we Check the size of each digit of a number
works just for numbers
*/

const getDigit = (num, i) => {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

// console.log(getDigit(7323, 12)) // 3


const digitCount = (num) => {
  let string = String(num);
  return string.length;
}
// console.log(digitCount(1234)) // 3

const maxDigit = (arr) => {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    max = Math.max(max, digitCount(arr[i]));
  }
  return max;
}

// console.log(maxDigit([1,22,33333,2]))


const radixSort = (arr) => {
  let largestNum = maxDigit(arr);

  for (let i = 0; i < largestNum; i++) {
    let digitBuckets = Array.from({length: 10}, () => []) // creating sub arrays based on the highest number of digits;

    for (let j = 0; j < arr.length; j++) {
      let digits = getDigit(arr[j], i);
      digitBuckets[digits].push(arr[j]);
    }
    arr = [].concat(...digitBuckets)
  }
  return arr;
}

console.log(radixSort([11,12,2,333,44444]))
