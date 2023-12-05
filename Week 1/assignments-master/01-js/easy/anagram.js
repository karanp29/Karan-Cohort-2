/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let newString = "";
  for (let i = str1.length -1 ;str1.length >= 0; i--) {
    newString += str1[i];
  }
  return newString == str2;
}

module.exports = isAnagram;
