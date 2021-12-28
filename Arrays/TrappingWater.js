/*
Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

step 1:

- do the left and right sides of the graph count as walls?
- will there be negative integers?
*/

// BRUTE FORCE

// Time: O(n^2);
// Space: O(1);

// const trappedWater = (height) => {
//   let totalWater = 0;

//   for (let p = 0; p < height.length; p++) {
//     let leftP = p, rightP = p;
//     let maxRight = 0, maxLeft = 0;

//     while (leftP >= 0) {
//       maxLeft = Math.max(maxLeft, height[leftP])
//       leftP--;
//     }

//     while (rightP < height.length) {
//       maxRight = Math.max(maxRight, height[rightP]);
//       rightP++;
//     }

//     let current = Math.min(maxLeft, maxRight) - height[p];

//     if (current >= 0) {
//       totalWater += current;
//     }
//   }
//   return totalWater;
// }

/*
1- identify the pointer with lesser value
2- is the pointer value less or equal to max on that side?
  yes -> update max on that side
  no -> get the water from pointer value and added to totalWater
3- move pointer inwards
4- repeat for other pointer
*/

const trappedWater = (height) => {
  let totalWater = 0;
  let maxLeft = 0;
  let maxRight = height.length - 1;

  while(maxLeft < maxRight) {
    let min = Math.min(height[maxLeft], height[maxRight]);
    if (maxLeft > height[maxLeft]) {

    }
  }
}
console.log(trappedWater([0, 1, 0, 2, 1, 0, 3, 1, 0, 1, 2]))
