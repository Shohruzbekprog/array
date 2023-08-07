function getEvenMin(arr) {
  let min = Infinity;

  for (let i = 0; i < arr.length; i += 2) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return min;
}
const arr = [3, 7, 2, 1, 9, 4, 6, 8, 5];
const smallest = getEvenMin(arr);
console.log(smallest); 
