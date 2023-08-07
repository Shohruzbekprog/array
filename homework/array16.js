function findClosestNumber(arr, R) {
  let closestNumber = arr[0];
  let minDifference = Math.abs(arr[0] - R);
  
  for (let i = 1; i < arr.length; i++) {
    const difference = Math.abs(arr[i] - R);
    if (difference < minDifference) {
      closestNumber = arr[i];
      minDifference = difference;
    }
  }
  
  return closestNumber;
}

const array = [3, 6, 9, 2, 12, 18];
const R = 8;
const result = findClosestNumber(array, R);
console.log(result);
