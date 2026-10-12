const isPalindrome = require('./palindrome.js');

test('is palindrome or not', () => {
  expect(isPalindrome('racecar')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});