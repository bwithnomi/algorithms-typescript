function quickSort(array: number[], left: number, right: number) {
  const len = array.length;
  let pivot: number;
  let partitionIndex: number;

  if (left < right) {
    pivot = right;
    partitionIndex = partition(array, pivot, left, right);

    //sort left and right
    quickSort(array, left, partitionIndex - 1);
    quickSort(array, partitionIndex + 1, right);
  }
  return array;
}

function partition(array: number[], pivot: number, left: number, right: number): number {
  let pivotValue = array[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (array[i] < pivotValue) {
      swap(array, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(array, right, partitionIndex);
  return partitionIndex;
}

function swap(array: number[], firstIndex: number, secondIndex: number) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

const numbers = [1, 4, 5, 6, 3, 2, 5];
//Select first and last index as 2nd and 3rd parameters
console.log(quickSort(numbers, 0, numbers.length - 1));