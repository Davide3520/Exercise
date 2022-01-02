/*
Write a function that takes in 2 non empty array of integers, find the pair of numbers one from each array, whose absolute difference is closest to zero. Return an array containing these 2 nunmbers, with the number of the first array in the first position.
*/
/*
Time: O(nLog(n) + mLog(m)) where n is the length of arr1, and m is the length of arr2;
Space: O(1) we are not storing anything that depends on the length of the array.
*/
const smallestDiff = (arr1, arr2) => {
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let idx1 = 0, idx2 = 0;
  let smallest = Infinity;
  let current = Infinity;
  let result = [];

  while (idx1 < arr1.length && idx2 < arr2.length) {
    let firstNum = arr1[idx1];
    let secondNum = arr2[idx2];
    if (firstNum < secondNum) {
      current = secondNum - firstNum;
      idx1++

    } else if (secondNum < firstNum) {
      current = firstNum - secondNum;
      idx2++;
    } else {
      return [firstNum, secondNum];
    }
    if (smallest > current) {
      smallest = current;
      result = [firstNum, secondNum];
    }
  }
  return result;
}

console.log(smallestDiff([-1, 5, 10, 20, 28, 3], [26, 134, 135, 15, 17] ))
