// Write a function that searches an array of strings for every element that
// matches the regular expression given by its argument. The function should
// return all matching elements in an array.

let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear'
];

function logMatch(arr, pattern) {
  let found = [];
  for (let i = 0; i < arr.length; i++) {
    if (pattern.test(arr[i])) {
      found.push(words[i]);
    }
  }

  return found;
}

// Using filter
function logMatchFilter(arr, pattern) {
  return arr.filter(word => pattern.test(word));
}

console.log(logMatch(words, /lab/));
console.log(logMatchFilter(words, /lab/));
