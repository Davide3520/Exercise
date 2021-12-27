/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

STEP 1 EDGE CASES:
- Does the thickness of the line affects the area?
- Do the left and right side count as walls?
- Does the higher line affect our area?

STEP 2 Test Cases:

We need to calculate the area of the container which is L x W  (Length, Width). The Length would be the height
of the container, which is the smallest of the 2 sides. The Width is the distance between the two lines in the x axis.
example: [1, 8, 6, 2, 9, 4] = L-> 8 x (4 - 1) = 24. 4 -> position highest number. 1-> position second largest number(8).

[7, 2, 3, 4, 9] 7 x 4 = 28.

*/

// L x W

// const waterContainer = (height) => {
//   let maxArea = 0;
//   for (let p1 = 0; p1 < height.length; p1++) {
//     for (let p2 = p1 + 1; p2 < height.length; p2++) {
//       let length = Math.min(height[p1], height[p2]);
//       let width = p2 - p1;
//       let area = length * width;
//       maxArea = Math.max(maxArea, area);
//     }
//   }
//   return maxArea;
// }

/*
Optimized solution 2 shift pointers
*/

const waterContainer = (heights) => {
  let p1 = 0;
  let p2 = heights.length - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const length = Math.min(heights[p1], heights[p2]);
    let width = p2 - p1;
    let area = length * width;
    maxArea = Math.max(maxArea, area);

    if (heights[p1] <= heights[p2]) {
      p1++;

    } else{
      p2--;
    }
  }
  return maxArea;
}

console.log(waterContainer([7, 2, 3, 4, 9]))
console.log(waterContainer([]))
console.log(waterContainer([1, 8, 6, 2, 9, 4]))

