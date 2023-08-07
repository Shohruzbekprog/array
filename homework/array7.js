function generatePattern(arr) {
  var result = [];

  for (var i = arr.length - 1; i >= 0; i -= 2) {
    result.push(arr[i]);
  }

  return result;
}


var myArray = [1, 2, 3, 4, 5, 6, 7];
var pattern = generatePattern(myArray);

console.log(pattern);
