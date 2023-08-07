function deleteElementWithIndex(arr, k) {
  arr.splice(k, 1);
  return arr;
}
const myArray = [1, 2, 3, 4, 5];
const indexToDelete = 2;

const newArray = deleteElementWithIndex(myArray, indexToDelete);
console.log(newArray); 
