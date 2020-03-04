/* function that takes three arguments, start, end, and step
and returns an array containing all the numbers from start up to (and including) end, incremented by step.*/

function range (start, end, step) {
  let arr = [];
  if (step > 0) {
    for (let i = start; i <= end; i += step) arr.push(i);
  } else {
    for (let i = start; i >= end; i += step) arr.push(i);
  }
  return arr;
}

/* function that takes an array of numbers
and returns the sum of these numbers.*/

function sum(arr) {
  total = arr.reduce(function(current, element) {
      return current + element;
   }, 0);

   return total;
}
