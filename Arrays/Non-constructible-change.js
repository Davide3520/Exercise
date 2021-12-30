/*
Given an array of positive integers representing the values of coins in your possessions, write a function that returns the minimum amount of change that you CANNOT create.
*/
const nonConstrChange = (coins) => {
  coins.sort((a,b)=> a- b);
  let amount = 0;

  for (let i = 0; i < coins.length; i++) {
    let current = coins[i];

    if (current > amount + 1) {
      return amount + 1;
    } else {
      amount += current;
    }
  }
  return amount + 1;
}

console.log(nonConstrChange([5, 7, 1, 1, 2, 3, 22])) // 20
