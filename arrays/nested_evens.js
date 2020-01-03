// Log the even numbers in myArray

let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0]
];

// Loop through each element  array individually
myArray[0].forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray[1].forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

myArray[2].forEach(function(num) {
  if (num % 2 === 0) {
    console.log(num);
  }
});

// Combine the above loops
myArray.forEach(function(arr) {
  arr.forEach(function(num) {
    if (num % 2 === 0) {
      console.log(num);
    }
  });
});
