function factorial(num) {
  let fac = 1;
  for (let i = num; i > 0; i--) {
    fac *= i;
  }
  return fac;
}
