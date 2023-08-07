function searchAllElements(arr) {
  let result = [];
  
  arr.map((element, index) => {
    if (element === 'k') {
      result.push(index);
    }
  });
  
  return result;
}
let arr = ['a', 'k', 'b', 'k', 'c', 'k'];
let indices = searchAllElements(arr);

console.log(indices);
