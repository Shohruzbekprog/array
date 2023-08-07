let array = [4, 5, 7, 8, 6, 9];
let oddIndices = [];

for (let i = 0; i < array.length; i++) {
  if (i % 2 !== 0) {
    oddIndices.push(array[i]);
  }
}

oddIndices.sort((a, b) => a - b);

console.log(oddIndices.join(" "));
console.log("odd numbers =", oddIndices.length); 
