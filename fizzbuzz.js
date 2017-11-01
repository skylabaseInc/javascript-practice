/*Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz"
for numbers that are divisible by both 3 and 5.
 */
var number = 1; 
while (number <= 100) {
if (number % 3 == 0 && number % 5 == 0) {
console.log("FIZZBUZZ"); 
}
else if (number % 3 == 0) {
console.log("FIZZ"); 
}
else if (number % 5 == 0) {
console.log("BUZZ"); 
}
else {
console.log(number); 
}
number += 1; 
}