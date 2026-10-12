const isPalindrome = require('./palindrome.js');

test('is palindrome or not', () => {
  expect(isPalindrome('raceca')).toBe(true);
  expect(isPalindrome('hello')).toBe(false);
});