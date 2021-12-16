/*

Write a function Factorial which accepts a number
and return the factorial of that number.

ex: 4! =  4 x 3 x 2 x 1 = 24
ex: 0! = 1 ALWAYS
*/

const factorial = (num) => {
  if (num < 2) {
    return 1;
  } else if (num === 2) {
    return num;
  }
  return num *= factorial(num - 1)
}

// if the number given is 2 we return 2. if the number is less than 2 we return 1 as a default.
// we loop each time by subtracting 1 from num until we hit the base case.

console.log(factorial(4))
console.log(factorial(3)) // 3 x 2 x 1
console.log(factorial(5))

