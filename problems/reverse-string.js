module.exports = function reverseString(string) {
  // Your code here
  if (typeof string !== 'string') {
    throw new Error;
  }

  return string
    .split('')
    .reverse()
    .join('');

};
