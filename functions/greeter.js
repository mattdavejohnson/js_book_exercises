function firstName() {
  let name = prompt('What is your first name?');
  return name;
}

function lastName() {
  let name = prompt('What is your last name?');
  return name;
}

let first = firstName();
let last = lastName();

console.log(`Greetings ${first} ${last}!`);
