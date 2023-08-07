function outputArrayElements(arr) {
  const n = arr.length;
  
  for (let i = 0; i < Math.ceil(n / 2); i++) {
    console.log("A[" + i + "]: " + arr[i]);
    
    if (i !== n - 1 - i) {
      console.log("A[" + (n - 1 - i) + "]: " + arr[n - 1 - i]);
    }
  }
}
const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
outputArrayElements(myArray);
