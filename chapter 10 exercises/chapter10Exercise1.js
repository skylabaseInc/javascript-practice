/**
 * Write a simple module similar to the weekDay module that can convert month
numbers (zero-based, as in the Date type) to names and can convert names
back to numbers. Give it its own namespace since it will need an internal
array of month names, and use plain JavaScript, without any module loader
system.
 */
var namesOfMonths = ["December", "January", "Ferbuary", "March", "April", "May", "June", "July", "August", "September", "October", "November"]; 
function nameOfMonth(numberOfMonth) {
	return namesOfMonths[numberOfMonth]; 
}
console.log(nameOfMonth(1)); 

(function () {
	var namesOfMonths = ["December", "January", "Ferbuary", "March", "April", "May", "June", "July", "August", "September", "October", "November"]; 
	function nameofmonth(numberOfMonth) {
		return namesOfMonths[numberOfMonth]; 
	}
	console.log(nameofmonth(2)); 
}()); 

var nameOfMonth = function (){
	var namesOfMonths = ["December", "January", "Ferbuary", "March", "April", "May", "June", "July", "August", "September", "October", "November"]; 
	return {
	name: function(number){return namesOfMonths[number]; },
	number: function(name){return namesOfMonths.indexOf(name);}
};
}();
console.log(nameOfMonth.name(6));
console.log(nameOfMonth.number("November"));
