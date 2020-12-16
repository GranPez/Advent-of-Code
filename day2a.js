/* 2020 Day 2-a advent calendar ZTM puzzle solution by Felipe Moreno

Each line gives the password policy and then the password. The password policy indicates the lowest and highest number of times a given letter must appear for the password to be valid. For example, 1-3 a means that the password must contain a at least 1 time and at most 3 times.

In the above example, 2 passwords are valid. The middle password, cdefg, is not; it contains no instances of b, but needs at least 1. The first and third passwords are valid: they contain one a or nine c, both within the limits of their respective policies.

How many passwords are valid according to their policies?*/


let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 2.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and create string with numbers
let counter = 0;

dataList.forEach(element => { 
    let line = element.split(/[-:\s/]+/); //made an array with each line splitting it
    //let letterSearched = line[2];
    let letterInString = (line[3].match(new RegExp(line[2], "g")) || []).length;
    let a = Number(line[0]);
    let b = Number(line[1]);
    if (letterInString>=a && letterInString<=b) counter++;
    console.log(line[2], line[3], letterInString, counter)   
    
   

    
    
});
console.log(counter);


//let dataInNumbers = dataList.map(x => Number(x)); //convert string to numbers
console.log(dataList[0],dataList[0][1]);