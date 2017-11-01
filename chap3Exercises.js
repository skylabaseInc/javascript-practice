/**
 * Exercise 1
 * The previous chapter introduced the standard function Math.min that returns
its smallest argument. We can do that ourselves now. Write a function min
that takes two arguments and returns their minimum.
 * 
 */
function minimum(first, second) {
    var result = Math.min(first, second);
    console.log('Result of the minimum of two numbers', result);
   return result;
}
minimum(93, 32);


/**
 * Exercise two recursive functions
 * Define a recursive function isEven corresponding to this description.
The function should accept a number parameter and return a Boolean.
Test it on 50 and 75. See how it behaves on −1. Why? Can you think
of a way to fix this?
 * 
 */

function  isEven(number) {
    if (number % 2 == 0){
        return console.log('Boolean result from the the recursive function to print even numbers is ',true);
    }
    else {
        return console.log('Boolean result from the the recursive function to print even numbers is ', false);
    }
}
isEven(-1); // test should be done with 50, 75 and -1


/**
 * Exercise three
 * Write a function countBs that takes a string as its only argument and re-
turns a number that indicates how many uppercase “B” characters are in the
string.
Next, write a function called countChar that behaves like countBs , except
it takes a second argument that indicates the character that is to be counted
(rather than counting only uppercase “B” characters). Rewrite countBs to
make use of this new function.
 */
//var count = 0;
var word = String('Bad Boy Bob');
function countBs(word) {
    var string = String('B');
    var count = 0;
    //var word = String('BoyboyB bB');
    for (var i = 0; i < word.length; i++) {
        if (word[i] == string) {
            count += 1
        }

    } 
     console.log(count);
}
countBs(word);

//var count = 0;
var word1 = String('Bad Boy Bob');
var string = String('B');
function countBs1(word, compare) {
    var count = 0;
    for (var i = 0; i < word.length; i++) {
        if (word[i] == compare) {
            count += 1
        }

    }
    console.log(count);
}
countBs1(word1,string);