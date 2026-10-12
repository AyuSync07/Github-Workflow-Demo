function isPalindrome(str) {
  if (typeof str !== 'string') return false;
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  return cleanStr === cleanStr.split('').reverse().join('');
}

module.exports = isPalindrome;