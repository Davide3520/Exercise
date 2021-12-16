/*
Write a function that sums all the numbers from 0 to
the given number as a argument of the function.
*/

const recursiveRange = (num) => {

  if (num === 0) {
    return 0;
  }

  return num += recursiveRange(num - 1);
}

console.log(recursiveRange(5)) // 0 + 1 + 2 + 3 + 4 + 5 = 15
console.log(recursiveRange(6)) // 0 + 1 + 2 + 3 + 4 + 5 + 6 = 21
