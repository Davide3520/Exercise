/*
Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
Note that after backspacing an empty text, the text will continue empty.

Input: s = "ab#c", t = "ad#c"
Output: true
Explanation: Both s and t become "ac".


Input: s = "ab##", t = "c#d#"
Output: true
Explanation: Both s and t become "".


Input: s = "a#c", t = "b"
Output: false
Explanation: s becomes "c" while t becomes "b".
*/

/*
BRUTE FORCE SOLUTION

Time: o(a + b) a b sizes of the inputs array
Space: o(a + b)
*/

// const typedOut = (s, t) => {
//   let arrS = builtArr(s), arrT = builtArr(t);

//   if (arrS.length !== arrT.length) {
//     return false;

//   } else {
//     return arrS.join('') === arrT.join('');
//   }
// }

// const builtArr = (string) => {
//   let result = [];

//   for (let p = 0; p < string.length; p++) {
//     let currentChar = string[p];

//     if (currentChar !== '#') {
//       result.push(currentChar);
//     } else {
//       result.pop();
//     }
//   }
//   return result;
// }

//OPTIMAL SOLUTION
// Time: o(a + b) Space: o(1). same time but different space.
const typedOut = (s, t) => {
  let p2 = t.length - 1;
  let p1 = s.length - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (s[p1] === '#' || t[p2] === '#') {
      if (s[p1] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p1--;
          backCount--;

          if (s[p1] === '#') {
            backCount += 2;
          }
        }
      }
      if (t[p2] === '#') {
        let backCount = 2;
        while (backCount > 0) {
          p2--;
          backCount--;

          if (t[p2] === '#') {
            backCount += 2;
          }
        }
      }
    } else {
      if (s[p1] !== t[p2]) {
        return false;
      } else {
        p1--;
        p2--;
      }
    }
  }
  return true;
}

console.log(typedOut("ab#c", "ad#c")) // TRUE
console.log(typedOut("ab##", "c#d#")) // TRUE
console.log(typedOut("a#c", "b")) // FALSE
console.log(typedOut("Az#", "ab#")) // FALSE
console.log(typedOut("xywrrmp","xywrrmu#p"))
