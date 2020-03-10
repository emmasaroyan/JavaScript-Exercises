//builds up a list structure
function arrayToList(arr) {
  let list = null;
  for (i = arr.length - 1; i >= 0; i--) list = {value: arr[i], rest: list};
  return list;
}
//produces an array from a list
function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) arr.push(node.value);
  return arr;
}
//creates a new list that adds the element to the front of the input list
function prepend(value, list) {
  return {value, rest: list};
}

function nth(list, number) {
  if (!list) return undefined;
  else if (number == 0) return list.value;
  else return nth(list.rest, number - 1);
}
