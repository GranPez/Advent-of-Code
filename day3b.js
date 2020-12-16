/*--- Part Two ---
Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

What do you get if you multiply together the number of trees encountered on each of the listed slopes? */

let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 3.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and create array


function Treecount(right, down) {
    let counter = 0; //counts tress
    let counter2 = 1; //counts items in file
    let sledPosition = 0;
    

    for ( let i = 0; i < dataList.length; i=i+down) {
        if (sledPosition>30) sledPosition = sledPosition-31;
        if (dataList[i][sledPosition]== "#") counter++;
        console.log(dataList[i], dataList[i][sledPosition], sledPosition, counter, counter2);    
        sledPosition = sledPosition+right; 
        counter2++    
    }
    return counter;
}


// dataList.forEach(element => {
//     if (sledPosition>30) sledPosition = sledPosition-31;
//     if (element[sledPosition]== "#") counter++;
//     console.log(element, element[sledPosition], sledPosition, counter, counter2);    
//     sledPosition = sledPosition+7; 
//     counter2++   
// });
console.log(Treecount(1,1),Treecount(3,1),Treecount(5,1),Treecount(7,1),Treecount(1,2));