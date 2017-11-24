function readFile(name) {
    return readFile.files[name] || "";
}
readFile.files = {
    "weekDay": 'var names = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];\
exports.name = function(number) { return names[number]; };\
exports.number = function(name) { return names.indexOf(name); };',
    "today": 'exports.dayNumber = function() { return (new Date).getDay(); };'
};
var exports = {};

function require(name) {
    var code = new Function("exports", readFile(name));
    var exports = {};
    code(exports);
    return exports;
}
console.log(require("weekDay").name(2));
console.log(new Date().getDate());

var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
"Thursday", "Friday", "Saturday"];
exports.name = function(number) {
return names[number];
};
exports.number = function(name) {
return names.indexOf(name);
};
var weekDay = require("weekDay");
var today = require("today");
console.log(weekDay.name(today.dayNumber()));

function require(name) {
if (name in require.cache){ 
    return require.cache[name];}
var code = new Function("exports, module", readFile(name));
var exports = {}, module = {exports: exports};
code(exports, module);
require.cache[name] = module.exports;
return module.exports;
}
require.cache = Object.create(null);