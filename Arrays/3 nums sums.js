console.log('ciao')

/*
Write a function that takes a non empty array of distinct integers and an integer representing a target sum. the function should find all triplets in the array that sum upp to the target sum and return a 2D array of all the triplets.  The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect the numbers they hold.
If no number sums up to the targe it should return an empty array.
*/
/*
TIME: O(n^2)
SPACE: O(n)
*/
const treeSum = (arr, target) => {
  let res = [];
  arr.sort((a, b) => a - b)
  for (let i = 0; i < arr.length - 2; i++) {
    let afterCurrent = i + 1;
    let end = arr.length - 1;

    while (afterCurrent < end) {
      let currentSum = arr[i] + arr[afterCurrent] + arr[end];
      if (currentSum === target) {
        res.push([arr[i], arr[afterCurrent], arr[end]]);
        afterCurrent++;
        end--;

      } else if (currentSum < target) {
        afterCurrent++;

      } else if (currentSum > target) {
        end--;
      }
    }
  }
  return res;
}

console.log(treeSum([12, 3, 1, 2, -6, 5, -8, 6], 0))
