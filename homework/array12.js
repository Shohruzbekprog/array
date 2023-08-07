function separateTruthyFalsyValues(arr) {
  let truthyArray = [];
  let falsyArray = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
      truthyArray.push(arr[i]);
    } else {
      falsyArray.push(arr[i]);
    }
  }

  return {
    truthy: truthyArray,
    falsy: falsyArray
  };
}

const inputArray = [10, false, "", "Shohruzbek", null];
const result = separateTruthyFalsyValues(inputArray);

console.log("Truthy:", result.truthy);
console.log("Falsy:", result.falsy);
