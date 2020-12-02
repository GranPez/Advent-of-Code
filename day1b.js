/* 2020 Day 1 advent calendar ZTM puzzle solution by Felipe Moreno
--- Part Two ---
The Elves in accounting are thankful for your help; one of them even offers you a starfish coin they had left over from a past vacation. They offer you a second one if you can find three numbers in your expense report that meet the same criteria.

Using the above example again, the three entries that sum to 2020 are 979, 366, and 675. Multiplying them together produces the answer, 241861950.

In your expense report, what is the product of the three entries that sum to 2020??*/

let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and create string with numbers
let dataInNumbers = dataList.map(x => Number(x)); //convert string to numbers

for (let i = 0; i < dataInNumbers.length; i++) {
    for (let j = i+1; j < dataInNumbers.length; j++) {
        for (let k = j+1; k < dataInNumbers.length; k++) {               
            let a = false;
            if (dataInNumbers[i]+dataInNumbers[j]+dataInNumbers[k]==2020) {
                a = true;
                console.log("The numbers are ", dataInNumbers[i], dataInNumbers[j], dataInNumbers[k])
                console.log("The multiplication is ", dataInNumbers[i]*dataInNumbers[j]*dataInNumbers[k])                
            }
            if (dataInNumbers[i]+dataInNumbers[j]+dataInNumbers[k]==2020) break;
        }       
         
    }  
    
    
}

