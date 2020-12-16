/* 2020 Day 2-b advent calendar ZTM puzzle solution by Felipe Moreno

Each policy actually describes two positions in the password, where 1 means the first character, 2 means the second character, and so on. (Be careful; Toboggan Corporate Policies have no concept of "index zero"!) Exactly one of these positions must contain the given letter. Other occurrences of the letter are irrelevant for the purposes of policy enforcement.

Given the same example list from above:

1-3 a: abcde is valid: position 1 contains a and position 3 does not.
1-3 b: cdefg is invalid: neither position 1 nor position 3 contains b.
2-9 c: ccccccccc is invalid: both position 2 and position 9 contain c.*/


let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 2a.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and create string with numbers
let counter = 0;

dataList.forEach(element => { 
    let line = element.split(/[-:\s/]+/); //made an array with each line splitting it  
    let position1 = Number(line[0]);
    let position2 = Number(line[1]);
    let passLetter =line[2]
    let letterPosition1 = line[3][position1-1];
    let letterPosition2 = line[3][position2-1];
    if ( (passLetter == letterPosition1 && passLetter!=letterPosition2) || (passLetter!=letterPosition1 && passLetter==letterPosition2) ) counter++;
    //console.log(line, line[2], line[3], position1, position2,  letterPosition1, letterPosition2, counter) 
    
});
console.log(counter);


//let dataInNumbers = dataList.map(x => Number(x)); //convert string to numbers
//console.log(dataList[0],dataList[0][1]);