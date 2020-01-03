// Log the even numbers in myArray

let myArray = [1, 3, 6, 11, 4, 2, 4, 9, 17, 16, 0];

// Filter first, then print
let evenArray = myArray.filter(num => num % 2 === 0);

evenArray.forEach(num => console.log(num));

// In one step
myArray.forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});
