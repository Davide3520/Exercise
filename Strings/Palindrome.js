/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string s, return true if it is a palindrome, or false otherwise.


Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

Input: s = " "
Output: true
Explanation: s is an empty string "" after removing non-alphanumeric characters.
Since an empty string reads the same forward and backward, it is a palindrome.
*/

/* Compare against reverse
Time: o(n)
Space: o(n)
*/

// const isPalindrome = (s) => {
//   s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//   let rev = "";

//   for (let i = s.length - 1; i >= 0; i--) {
//     rev += s[i];
//   }
//   return s === rev;
// }

/* 2 Pointer from outside */
// const isPalindrome = (s) => {
//   s = s.replace(/[^A-Za-z0-9]/g,'').toLowerCase();
//   let left = 0, right = s.length - 1;
//   while (left < right) {
//     if (s[left] !== s[right]) {
//       return false;
//     }
//     left++;
//     right--;
//   }
//   return true;
// }

/* 2 Pointers From Inside */
const isPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = Math.floor(s.length / 2)
  let right = left;

  if (s.length % 2 === 0) {
    left--;
  }
  while (left >= 0 && right < s.length) {
    if (s[left] !== s[right]) {
      return false;
    }
    left--;
    right++;
  }
  return true;
}


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome("race a car"))
console.log(isPalindrome(" "));
