const insertionSort = (arr: number[]): number[] => {
  const length = arr.length;
  for (let i = 0; i < length; i++) {
    if (arr[i] < arr[0]) {
      arr.unshift(arr.splice(i, 1)[0])
    }else {
      for (let j = 0; j < i; j++) {
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) {
          arr.splice(j,0, arr.splice(i, 1)[0])
        }
      }
    }
    
  }
  
  return arr;
}

console.log(insertionSort([1, 4, 5, 6, 3, 2,5]));
