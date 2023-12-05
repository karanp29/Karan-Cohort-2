/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {

  let originalStr = str;
  let strLen = Number(str.length/2)
  for (let i = 0; i < strLen/2; i++) {
      let temp = str[i]
      str[i] = str[str.length - i -1]
      str[str.length - i -1] = temp
  }
  return originalStr == str;
}

module.exports = isPalindrome;
