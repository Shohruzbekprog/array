function deleteSameNeighbors(arr) {
  var newArray = [];

  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArray.push(arr[i]);
    }
  }

  if (arr[arr.length - 1] !== arr[arr.length - 2]) {
    newArray.push(arr[arr.length - 1]);
  }

  return newArray;
}
var array = [1, 2, 2, 3, 3, 3, 4, 5, 5];
var result = deleteSameNeighbors(array);
console.log(result);
