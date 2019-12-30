function times(number1, number2) {
  let result = number1 * number2;
  console.log(result);
  return result;
}

let oneFac = times(1, 1);
let twoFac = times(oneFac, 2);
let threeFac = times(twoFac, 3);
let fourFac = times(threeFac, 4);
let fiveFac = times(fourFac, 5);
