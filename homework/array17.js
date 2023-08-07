function findAdjacentPairWithLargestSum(arr) {
  if (arr.length < 2) {
    return null;
  }

  let maxSum = arr[0] + arr[1];
  let maxPair = [arr[0], arr[1]];

  for (let i = 1; i < arr.length - 1; i++) {
    const sum = arr[i] + arr[i + 1];
    if (sum > maxSum) {
      maxSum = sum;
      maxPair = [arr[i], arr[i + 1]];
    }
  }

  return maxPair;
}
const arr = [1, 2, 3, 4, 5, 6, 7];
const result = findAdjacentPairWithLargestSum(arr);
console.log(result);
