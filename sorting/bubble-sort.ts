const buubleSort = (arr: number[]): number[] => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j+1];
        arr[j+1] = temp;
      }
    }
  }
  
  return arr;
}

console.log(buubleSort([1, 4, 5, 6, 3, 2,5]));