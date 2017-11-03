function deepEqual(a, b) {
if (a === b)return true; 

if (a == null || typeof a != "object" || 
b == null || typeof b != "object")
return false; 

var propertiesInA = 0, propertiesInB = 0; 

for (var property in a)
propertiesInA += 1; 

for (var property in b) {
propertiesInB += 1; 
if ( ! (property in a) ||  ! deepEqual(a[property], b[property]))
return false; 
}

return propertiesInA == propertiesInB; 
}

var obj =  {here: {is:"an"}, object:2}; 
var obj1 = obj;
var obj2 = { here: { is: "an" }, object: 2 };
console.log(deepEqual(obj, obj1)); 
console.log(deepEqual(obj, obj)); 
console.log(deepEqual(obj, obj2)); 
console.log(deepEqual(obj,  {here:1, object:2})); 
console.log(deepEqual(obj,  {here: {is:"an"}, object:2})); 
