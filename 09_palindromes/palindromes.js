const palindromes = function (str) {
    // Remove all non-alphabetic characters and convert the string to lowercase
  str = str.toLowerCase().replace(/[^a-z]/g, '');

  // Compare the string with its reverse
  return str === str.split("").reverse().join('')
};

// Do not edit below this line
module.exports = palindromes;
