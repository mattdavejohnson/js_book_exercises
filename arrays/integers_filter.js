// Use filter to return a new array will all the integers from the
// input array.

let array = [1, 'a', '1', 3, NaN, 3.1415, -4, null, false];

let filteredArray = array.filter(function(element) {
  return Number.isInteger(element);
});

// Alternate way to solve with a function.
function removeNonInteger(arr) {
  return arr.filter(function(element) {
    return Number.isInteger(element);
  });
}

let newArray = removeNonInteger(array);
