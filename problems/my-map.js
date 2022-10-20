function myMap(inputArray, callback) {
  // Your code here
  let mapped = [];

  for (let i = 0; i < inputArray.length; i++) {
    let el = inputArray[i];
    let mappedEl = callback(el);
    mapped.push(mappedEl);
  }

  return mapped;
}

module.exports = myMap;
