
function sumrange(start, stop,step) {
    if (step == null){
        step = 1;
    }
    var result = [];
    if (step > 1){
        for (var i = start; i <= stop; i += step) {
            result.push(i);
        }
    }
    else{
        for (var i = start; i >= stop; i += step){
            result.push(i);
     }
    }
    return result;
}
console.log(sumrange(1,10,2));

function sum(array) {
    var result = 0;
    for (var i = 0; i < array.length; i++)
        result += array[i];
    return result;
}