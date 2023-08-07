function printEvenOddElements(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
  
  for (let i = 1; i < arr.length; i += 2) {
    console.log(arr[i]);
  }
}

const array = [1, 2, 3, 4, 5, 6];
printEvenOddElements(array);
