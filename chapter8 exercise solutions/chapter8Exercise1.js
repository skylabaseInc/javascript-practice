function MultiplicatorUnitFailure() {}

function primitiveMultiply(firstVariable, secondVariable) {
if (Math.random() < 0.5) {
console.log(Math.random()); 
return firstVariable * secondVariable; 
}
else
        throw new MultiplicatorUnitFailure(); 

}

function reliableMultiply(firstVariable, secondVariable) {
for (; ; ) {
try {
    return primitiveMultiply(firstVariable, secondVariable); 
}catch (error) {
if ( ! (error instanceof MultiplicatorUnitFailure)) {
throw error; 
}
}
}
// Your code here.
    var reliable = primitiveMultiply(firstVariable, secondVariable); 
return reliable; 
}

console.log(reliableMultiply(12, 4)); 