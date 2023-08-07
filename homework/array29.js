function getElementsOneTime(arr) {
  const frequency = {};
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }
  
  const result = [];
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (frequency[element] === 1) {
      result.push(element);
    }
  }
  
  return result;
}

const input = [1, 5, 6, 1, 5, 7, 2];
const output = getElementsOneTime(input);
console.log(output);
