function swapArrayHalf(array) {
  const length = array.length;
  const midpoint = Math.floor(length / 2);

  for (let i = 0; i < midpoint; i++) {
    const temp = array[i];
    array[i] = array[midpoint + i];
    array[midpoint + i] = temp;
  }

  return array;
}

const inputArray = [1, 2, 3, 4, 5, 6];
const swappedArray = swapArrayHalf(inputArray);
console.log(swappedArray); 
