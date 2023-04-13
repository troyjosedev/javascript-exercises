const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	return array.reduce(add, 0);
};

const multiply = function(array) {
  return array.reduce((a, b)=> (a * b), 1)
};

const power = function(base, exponent) {
	return Math.power(base, exponent)
};

const factorial = function(num) {
	if (num === 0 || num === 1){
    return 1
  } else {
    return num * factorial(n - 1)
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
