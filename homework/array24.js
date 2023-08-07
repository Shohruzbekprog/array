function replaceMinMaxWithZero(arr) {
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  let firstMinIndex = arr.indexOf(min);
  for (let i = firstMinIndex + 1; i < arr.length; i++) {
    if (arr[i] === min) {
      arr[i] = 0;
    }
  }

  let firstMaxIndex = arr.indexOf(max);
  for (let i = firstMaxIndex + 1; i < arr.length; i++) {
    if (arr[i] === max) {
      arr[i] = 0;
    }
  }

  return arr;
}

let array = [3, 7, 2, 5, 7, 2, 9, 1];
let modifiedArray = replaceMinMaxWithZero(array);
console.log(modifiedArray);
