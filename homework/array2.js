function generateArray(n, A, B) {
  let output = [A, B]; 

  for (let i = 2; i < n; i++) {
    let sum = output.reduce((accumulator, currentValue) => accumulator + currentValue);
    output.push(sum); 
  }

  return output;
}


let n = 5;
let A = 2;
let B = 3;
let result = generateArray(n, A, B);
console.log(result);
