/*

Write a function called fib, which accepts a number and returns
the nth number in the Fibonacci sequence.

*/

const fib = (num) => {
  if (num <= 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)) // 3 = 1 1 2 3
console.log(fib(10)) // 1 1 2 3 5 8 13 21 34 55
