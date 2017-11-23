var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

var arrayOfNumberTypes = ["1", "-3", "+17", "2.19", ".4", "5.", "1.3e2", "1E-6", "1e+10"];
arrayOfNumberTypes.forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
var arrayOfNumberTypes = ["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5", "."];
arrayOfNumberTypes.forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});