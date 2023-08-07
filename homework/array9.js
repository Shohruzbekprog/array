const arr = [1, 2, 3, 4, 5, 6];

const oddElements = arr.filter((_, index) => index % 2 == 0);

oddElements.sort((a, b) => a - b);

const evenElements = arr.filter((_, index) => index % 2 !== 0);

evenElements.sort((a, b) => b - a);

const result = [...oddElements, ...evenElements];

console.log(result);
