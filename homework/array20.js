function createPairs(a) {
  const b = []; 

  for (let i = 0; i < a.length - 1; i += 2) {
    const pair = [a[i], a[i + 1]]; 
    b.push(pair); 
  }

  return b;
}

const a = [1, 2, 3, 4, 5, 6];
const b = createPairs(a);
console.log(b);
