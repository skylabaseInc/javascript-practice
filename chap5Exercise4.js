function every(array, predicate) {
  for (var i = 0; i < array.length; i++) {
    if (!predicate(array[i]))
      return false;
  }
  return true;
}
function everyB(array, predecessor) {
    for (var j = 0; j < array.length; j++) {
        if (!predecessor(array[j])) {
            return false;
        }
        return true;
        
    }
}
console.log(everyB([NaN,1,2,3,4], isNaN));

function some(array, predicate) {
  for (var i = 0; i < array.length; i++) {
      //array[0] = NaN;
    if (predicate(array[i]))
      return true;
  }
  return false;
}

console.log(every([NaN, NaN, NaN], isNaN));
console.log(every([NaN, NaN, 4], isNaN));
console.log(some([NaN, 3, 4], isNaN));
console.log(some([2, 3, 4], isNaN));
