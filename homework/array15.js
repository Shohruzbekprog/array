function findLastLocalMax(arr) {
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
      return i;
    }
  }

  return -1;
}

const array = [1, 3, 5, 4, 2];
const lastIndex = findLastLocalMax(array);
console.log("Last Local Maximum Index:", lastIndex);
