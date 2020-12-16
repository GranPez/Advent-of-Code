/* 2020 Day 6-a advent calendar ZTM puzzle solution by Felipe Moreno

--- Part Two ---
As you finish the last group's customs declaration, you notice that you misread one word in the instructions:

You don't need to identify the questions to which anyone answered "yes"; you need to identify the questions to which everyone answered "yes"!

Using the same example as above:

abc

a
b
c

ab
ac

a
a
a
a

b
This list represents answers from five groups:

In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
In the second group, there is no question to which everyone answered "yes".
In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
In the fourth group, everyone answered yes to only 1 question, a.
In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.
In this example, the sum of these counts is 3 + 0 + 1 + 1 + 1 = 6.

For each group, count the number of questions to which everyone answered "yes". What is the sum of those counts?*/


let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 6.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split(/\n\n/); //read input.txt and split it into groups
let counter = 0;

dataList.forEach(group => {
    
    let people = group.split(/\n/);
    let peopleInGroup = people.length;
    group = group.replace(/\n/g, '')//eliminate empty lines    
    let answers = [] ;        
            
    for (let i = 0; i < group.length; i++) {
        let re = new RegExp(group[i], 'g'); //letter to be searched 
        let letterInGroup = group.match(re).length;
        if ( letterInGroup == peopleInGroup && !answers.includes(group[i])) {//check if each answer is given by all people in group and is not present in answers
            answers.push(group[i]); //see which answers are not repeated
        }
    }
    console.log(people, answers, answers.length, peopleInGroup );

    counter += answers.length; //add up all the yes answers


});
 
    
console.log(counter); //bob's your uncle!
