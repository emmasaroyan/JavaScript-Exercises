function reverseArray (arr) {
  let newArray = [];
  for (let element of arr) {
    newArray.unshift(element);
  }
  return newArray;

}

function reverseArrayInPlace(arr) {
  for (let i = 0; i <= Math.floor(arr.length / 2); i++) {
    let first = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = first;
  }
    return arr;
}
