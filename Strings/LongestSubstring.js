/*
Given a string s, find the length of the longest substring without repeating characters

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
*/

/* Brute Force
Time: o(n^2);
Space: o(n);
*/
// const longestSubString = (s) => {
//   if (s.length <= 1) {
//     return s.length;
//   }
//   let longest = 0;
//   for (let i = 0; i < s.length; i++) {
//     let seenChar = {}, currentLength = 0;

//     for (let j = i; j < s.length; j++) {
//       const currentChar = s[j];
//       if (!seenChar[currentChar]) {
//         currentLength++;
//         seenChar[currentChar] = true;
//         longest = Math.max(longest, currentLength);
//       } else {
//         break;
//       }
//     }
//   }
//   return longest;
// }

/* Sliding Window */
/*
Time: o(N)
Space: o(N);
*/
const longestSubString = (string) => {
  if (string.length <= 1) return string.length;

  let longest = 0, seen = {}, left = 0;

  for (let right = 0; right < string.length; right++) {
    const current = string[right];
    const seenChar = seen[current];

    if (seenChar >= left) {
      left = seenChar + 1;
    }
    seen[current] = right;
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(longestSubString("abcabcbb"))
console.log(longestSubString("bbbbb"))
console.log(longestSubString("pwwkew"))
