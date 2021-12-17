/*
-string search takes 2 strings a longer one and the pattern that
we are looking for.
-loop over each char in longer string;
-loop over pattern string
if the char matches keep looping
if the char do not match exit the loop
every time we find a match in the longer string increment count variable
return count varl
*/

const stringSearch = (mainString, patternString) => {

  let count = 0;
  for (let i = 0; i < mainString.length; i++) {
    for (let j = 0; j < patternString.length; j++) {
      let pattern = patternString[j].toLowerCase();
      if (pattern !== mainString[i + j].toLowerCase()) break;
      if (j === patternString.length - 1) {
        count += 1;
      }
    }
  }
  return count;
}

console.log(stringSearch('helloworld', 'll'))
console.log(stringSearch('Hello fry Friend', 'fri'))
