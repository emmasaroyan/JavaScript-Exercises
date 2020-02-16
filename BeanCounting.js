function countChar(string, char){
  let count = 0;
  for (let i = 0; i <= string.length - 1; i ++) {
    if (string[i] == char)
    {
      count += 1;
    }
  }
  return count;
}

function countBs(string) {
  return countChar(string, 'e');
}

console.log(countBs("eee")); // output: 3
