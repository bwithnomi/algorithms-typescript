// factorial of 5 is 5 * 4 * 3 * 2 * 1 = 120
const factorial = (value: number): number => {
  if (value <= 2) {
    return value
  }

  return value * factorial(value - 1);
}

console.log(factorial(2));
