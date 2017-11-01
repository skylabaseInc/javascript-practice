/*
Write a program that creates a string that represents an 8×8 grid, using new-
line characters to separate lines. At each position of the grid there is either a
space or a “#” character. The characters should form a chess board.
*/ 
var number = 1;
while (number <= 8) {
    if(number % 2 == 0)
    {
        console.log("# # # # ");
    }
    else
    {
        console.log(" # # # #");
    }
    number +=1
}