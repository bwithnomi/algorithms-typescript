const selectionSort = (arr: number[]): number[] => {
  let length = arr.length;
  for (let i = 0; i < length; i++) {
    let smallestIndex = i;
    let temp = arr[i];
    for (let j = i+1; j < length; j++) {
      if (arr[i] > arr[j]) {
        arr[i] = arr[j]
        smallestIndex = j;
      }
    }
    
    arr[i] = arr[smallestIndex];
    arr[smallestIndex] = temp;
  }
  
  return arr;
}

console.log(selectionSort([1, 4, 5, 6, 3, 2,5]));