/*
Given a non empty string of lower case and non negative integers representing key,
write a function that returns a new string obtained by shifting every letter in the input strging by k positions in the alphabet, where k is the key.
*/

const caesarCipher = (str, key) => {
  const alpha = Array.from(Array(26)).map((e, i) => i + 65);
  const alphabet = alpha.map((x) => String.fromCharCode(x).toLowerCase());
  let res = "";

  for (let i = 0; i < str.length; i++) {
    let current = str[i];
    let oldIdx = alphabet.indexOf(current);
    let newIdx = oldIdx + key
    let final = alphabet[newIdx % 26];
    res += final;
  }
  return res;
}

console.log(caesarCipher("xyz", 2))
console.log(caesarCipher("abc", 4))
console.log(caesarCipher('vda', 5))
