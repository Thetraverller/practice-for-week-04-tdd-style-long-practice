function returnsThree() {
  // Your code here
  return 3;
}

function reciprocal(n) {
  // Your code here
  const err = new TypeError('number is out of allowable range(1 - 1,000,000)');

  if (n < 1 || n > 1000000) {
    throw err;
  }

  return Number( ( 1 / n ).toPrecision(3) );
}

module.exports = {
  returnsThree,
  reciprocal
};
