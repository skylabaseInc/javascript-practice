/*
Write a loop that makes seven calls to console.log to output the following
triangle:
*/

var i, j;
 i =1;
while (i <= 7) {
    j = 1
    while (j <= i) {
        console.log("# ");
        j=j+1;
    }
    console.log('\n');
    i=i+1;
}

//this is the same implementation using a for loop
for(var i = 1; i<= 7;i++)
{
    for (var j = 1; j <= i;j++) {
        console.log("# "," "); 
    }
    console.log("\n");
}
