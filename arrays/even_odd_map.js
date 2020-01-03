// Map through myArray and in the new array, if the original number was
// even, store the string 'even' and if it was odd, store the string 'odd.'

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

let evenOddArray = myArray.map(function(num) {
  if (num % 2 === 0) {
    return 'even';
  } else {
    return 'odd';
  }
});
