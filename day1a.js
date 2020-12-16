/* 2020 Day 1 advent calendar ZTM puzzle solution by Felipe Moreno

Specifically, they need you to find the two entries that sum to 2020 and then multiply those two numbers together.

For example, suppose your expense report contained the following:

1721
979
366
299
675
1456
In this list, the two entries that sum to 2020 are 1721 and 299. Multiplying them together produces 1721 * 299 = 514579, so the correct answer is 514579.

Of course, your expense report is much larger. Find the two entries that sum to 2020; what do you get if you multiply them together?*/

let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 1.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and create string with numbers
let dataInNumbers = dataList.map(x => Number(x)); //convert string to numbers

for (let i = 0; i < dataInNumbers.length; i++) {
    
    for (let j = i+1; j < dataInNumbers.length; j++) {
      
        if (dataInNumbers[i]+dataInNumbers[j]==2020) {
            
            console.log("The numbers are ", dataInNumbers[i], dataInNumbers[j])
            console.log("The multiplication is ", dataInNumbers[i]*dataInNumbers[j])
            console.log(i,j); 
            i=j=dataInNumbers.length;                       
        }
                        
    }

}

