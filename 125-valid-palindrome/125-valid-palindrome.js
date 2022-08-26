/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  s = s.replace(/[^A-Z0-9]+/gi,'').toLowerCase();
  const reverseWord = s.split('').reverse().join('');

  return s === reverseWord;
};