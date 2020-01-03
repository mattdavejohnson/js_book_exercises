// Use map and filter to first determine the lengths of all the elements
// in an array of string values, then discard the even values.

let array = ['a', 'abcd', 'abcde', 'abc', 'ab'];

// Function that returns an array of the lengths of each element.
function lengths(arr) {
  return arr.map(function(element) {
    return element.length;
  });
}

// Function that returns an array of the odd valued elements.
function oddLengths(arr) {
  return lengths(arr).filter(function(num) {
    return num % 2 === 1;
  });
}

// Function that does both above functions in one function.
function oddLengthsFunction(arr) {
  let filteredArray = arr
    .map(function(element) {
      return element.length;
    })
    .filter(function(num) {
      return num % 2 === 1;
    });

  return filteredArray;
}

console.log(oddLengths(array));
console.log(oddLengthsFunction(array));
