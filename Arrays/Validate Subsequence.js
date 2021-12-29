/*
Given 2 non empty array of integers, write a function that determined whether the second array is a subsequence of the first one.

A sub sequence of an array is a set of numbers that aren't necessarily adjacent in the array but that are in the same order as they appear in the array, For instance the numbers [1, 3, 4] form a subsequence of the array [1,2,3,4] and so do the numbers [2,4].
*/

// TIME: O(n) SPACE: O(1)

const isSubSequence = (arr, sequence) => {
  let p1 = 0;
  let p2 = 0;

  while (p1 < arr.length && p2 < sequence.length) {
    if (arr[p1] === sequence[p2]) {
      p2++;
    }
    p1++
  }
  return p2 === sequence.length; // we know that is a subsequence when p2 is the same as the length of the sequence;
}

console.log(isSubSequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])) // true
