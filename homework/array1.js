function getLevel2(n) {
  const levels = [];

  for (let level = 2; level <= n; level++) {
    const levelValue =  Math.pow(2, level);
    levels.push(levelValue);
  }

  return levels;
}

console.log(getLevel2(5)); 
