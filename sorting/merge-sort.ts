const mergeSort = (arr: number[]): number[] => {
  const length = arr.length
  if (length == 1) {
    return arr;
  }
  let middle = Math.floor(length / 2);
  let left = arr.slice(0, middle);
  let right = arr.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

const merge = (left: number[], right: number[]): number[] => {
  let resArray: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {

    if (left[leftIndex] < right[rightIndex]) {
      resArray.push(left[leftIndex]);
      leftIndex++;
    } else {
      resArray.push(right[rightIndex]);
      rightIndex++;
    }

  }

  return resArray.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

console.log(mergeSort([1, 4, 5, 6, 3, 2, 5]));
