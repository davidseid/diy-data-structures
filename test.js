
const testArray = [7, 2, 1, 3, 4, 9, 6, 5, 8];
const quickSort = (arr, left = 0, right = arr.length - 1) => {
  let index = partition(arr, left, right);

  if (left < index - 1) {
    quickSort(arr, left, index - 1);
  }
  if (right > index) {
    quickSort(arr, index, right);
  }

  return arr;
};

const partition = (arr, left, right) => {
  let pivot = arr[Math.floor((left + right) / 2)];

  while (left <= right) {
    while (arr[left] < pivot) left++;

    while (arr[right] > pivot) right--;

    if (left <= right) {
      swap(arr, left, right);
      left++;
      right--;
    }
  }

  return left;
};

const swap = (arr, left, right) => {
  let temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

console.log(quickSort(testArray));