/*2020 Day 7 advent calendar ZTM puzzle solution by Felipe Moreno

For example, consider the following rules:

light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
These rules specify the required contents for 9 bag types. In this example, every faded blue bag is empty, every vibrant plum bag contains 11 bags (5 faded blue and 6 dotted black), and so on.

You have a shiny gold bag. If you wanted to carry it in at least one other bag, how many different bag colors would be valid for the outermost bag? (In other words: how many colors can, eventually, contain at least one shiny gold bag?)

In the above rules, the following options would be available to you:

A bright white bag, which can hold your shiny gold bag directly.
A muted yellow bag, which can hold your shiny gold bag directly, plus some other bags.
A dark orange bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
A light red bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
So, in this example, the number of bag colors that can eventually contain at least one shiny gold bag is 4.

How many bag colors can eventually contain at least one shiny gold bag? (The list of rules is quite long; make sure you get all of it.) */

const { execFile } = require("child_process");
let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 7.txt'); //create path of input.txt file which contains list of data
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and split into lines
let bagColors = ['shiny gold']
let counter = 0;


for (let i = 0; i < dataList.length; i++) {
    let element = dataList[i];
    element = element.split(' bags contain ');
    let firstBag = element[0];
    let restBags = element[1];
    
    if (bagColors.indexOf(firstBag) ==-1 && CheckBags(restBags))  {
        bagColors.push(firstBag);        
        counter++;
        i=0;
        // console.log(bagColors, firstBag,element, counter);
    }
    // console.log(element, counter);    
   
}

function CheckBags(bags) {
    let tester = 0;
    bagColors.forEach(element => {
        // console.log(bagColors, bags, element, bags.includes(element));
        if (bags.includes(element)) {                       
            tester++;
            return;
        }              
    });

    if (tester > 0) return true;
    return false;    
}

console.log(bagColors, counter, bagColors.length);
