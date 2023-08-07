function rangeOutSum(arr, K, L) {
  if (arr.length <= 2) {
    return 0;
  }
  
  if (K > L) {
    [K, L] = [L, K]; 
  }
  
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (i < K || i > L) {
      sum += arr[i];
    }
  }
  
  return sum;
}

