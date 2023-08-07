function findMostCommonElement(arr) {
  let frequency = {};
  let maxFrequency = 0;
  let mostCommonElement;

  for (let element of arr) {
    if (frequency[element]) {
      frequency[element]++;
    } else {
      frequency[element] = 1;
    }
  }

  for (let [key, value] of Object.entries(frequency)) {
    if (value > maxFrequency) {
      maxFrequency = value;
      mostCommonElement = key;
    }
  }

  return {
    element: mostCommonElement,
    frequency: maxFrequency
  };
}

const array = [1, 2, 3, 1, 4, 2, 2, 3, 4, 3, 4, 4];
const result = findMostCommonElement(array);
console.log(`Most common element: ${result.element}, Frequency: ${result.frequency}`);
