function reverse(array) {
    var result = [];
    for (var i = array.length - 1; i >= 0; i--)
        result.push(array[i]);
    return result;
}

function reverseArrayInPlace(array) {
    for (var i = 0; i < Math.floor(array.length / 2); i++) {
        var old = array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = old;
    }
    return array;
}

console.log(reverse(["a", "b", "c"]));
var arrayValue = [1, 2, 3, 4, 5];
console.log(reverse(arrayValue));
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]