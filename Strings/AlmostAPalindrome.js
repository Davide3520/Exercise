/*
Given a string s, return true if the s can be palindrome after deleting at most one character from it.

Input: s = "aba"
Output: true

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.

Input: s = "abc"
Output: false

*/
const almostAPalindrome = (s) => {
  s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
  let left = 0, right = s.length - 1;

  while (left < right) {
    if (s[left] !== s[right]) {
      return isPal(s, left + 1, right) || isPal(s, left, right - 1);
    }
    left++;
    right--;
  }
  return true;
}

const isPal = (s, left, right) => {
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

console.log(almostAPalindrome("race a car")) // TRUE
console.log(almostAPalindrome("abccdba")) //TRUE
console.log(almostAPalindrome("abc")) // FALSE
console.log(almostAPalindrome('')) // TRUE
console.log(almostAPalindrome('a')) // TRUE
console.log(almostAPalindrome('ab')) // TRUE
