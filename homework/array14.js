function getoddMax(arr) {
  let oddMax = -Infinity;

  for (let i = 1; i < arr.length; i += 2) {
    if (arr[i] > oddMax) {
      oddMax = arr[i];
    }
  }

  return oddMax;
}
const arr = [1, 5, 2, 9, 8, 3, 7];
console.log(getoddMax(arr)); 
