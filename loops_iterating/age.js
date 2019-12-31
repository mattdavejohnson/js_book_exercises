let rlSync = require('readline-sync');
let age = Number(rlSync.question('How old are you? '));
age = parseInt(age);

console.log(`You are ${age} years old!`);

for (let i = 0; i < 3; i++) {
  age += 10;
  console.log(`In 10 years you will be ${age}!`);
}
