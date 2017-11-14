var arrays = [[1, 2, 3], [4, 5], [6],[7,8,9,10,11,12]];

console.log(arrays.reduce(function(flat, current) {
  return flat.concat(current);
},[]));
console.log(arrays.toString([]));
// → [1, 2, 3, 4, 5, 6]