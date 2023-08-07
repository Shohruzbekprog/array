function findDuplicateIndices(arr) {
  const indices = {};
  
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    
    if (element in indices) {
      indices[element].push(i);
    } else {
      indices[element] = [i];
    }
  }
  
  return Object.values(indices).filter(indexArray => indexArray.length > 1);
}
findDuplicateIndices([1, 2, 3, 4, 2, 5, 6, 4]);