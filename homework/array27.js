let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let k = 2; 
let m = 5; 

let deletedElements = array.splice(k, m - k + 1);

console.log("Number of elements:", array.length);
console.log("Elements:", array);
