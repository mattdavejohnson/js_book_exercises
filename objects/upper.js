// Create an array from the keys of obj below, with all values
// converted to uppercase. Do not mutate obj.

let obj = {
  b: 2,
  a: 1,
  c: 3
};

// Create an array of the keys of obj.
let objKeys = Object.keys(obj);

// call toUpperCase() on each element of objKeys.
let upperCaseKeys = objKeys.map(element => element.toUpperCase());

// Do the above in less steps.
let upperKeys = Object.keys(obj).map(element => element.toUpperCase());
