/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  count = 0;
  let tocheck = ['a', 'e', 'i', 'o', 'u']
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < tocheck.length; j++) {
      if(str[i].toLowerCase().includes(tocheck[j])){
        count++;
      }    
    }
  }
  return count;
}
module.exports = countVowels;
