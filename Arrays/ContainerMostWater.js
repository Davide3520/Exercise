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
