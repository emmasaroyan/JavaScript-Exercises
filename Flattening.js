//using reduce and concat methods
let arrays = [[1,2],[3],[4,5]];

console.log(arrays.reduce((flat, current) => flat.concat(current)));
