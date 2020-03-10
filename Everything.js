//version1
function every(arr, predicate) {
  for (let i of arr) {
    if (!predicate(i)) return false;
  }
  return true;
}

//version2
function every(arr, predicate) {
  return !arr.some(i => !predicate(i));
}
