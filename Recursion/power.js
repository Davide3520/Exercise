/*
Write a function called power which accepts a base and an exponent.
the function should return the power of the base to the exponent.
*/

const power = (base, exp) => {
  if (exp === 0 || base === 0) {
    return 1;
  }
  return base *= power(base, exp - 1)
}

// By multyplying the base each time with exp - 1 we will arrive at our base case.

console.log(power(2, 2)) // 4
console.log(power(2, 0)) // 1
console.log(power(2, 3)) // 8
