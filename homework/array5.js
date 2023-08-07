let numbers = [4, 5, 7, 8, 6, 9];
let evenNumbers = [];
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    evenNumbers.push(numbers[i]);
  }
}

for (let i = numbers.length - 1; i >= 0; i--) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

let result = evenNumbers.concat(oddNumbers);

console.log(result);

