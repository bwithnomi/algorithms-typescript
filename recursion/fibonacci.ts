// fib of 5 is 0 + 1 + 1 + 2 + 3 = 5
// fibonacci sequence is start from 0 and 1, every next number num is sum of previous 2
const fibonacciInterval = (value: number) => { // 0(n)
  let arr = [0, 1]
  for (let index = 2; index <= value ; index++) {
    arr.push(arr[index - 2] + arr[index - 1])
  }

  return arr[value]
}

const fibonacciRecursive = (value: number): number => { // 0(2^n)
  if (value <= 2) {
    return value;
  }

  return fibonacciRecursive(value - 1) + fibonacciRecursive(value - 2)
}

console.log(fibonacciInterval(30));