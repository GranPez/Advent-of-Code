

let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 8.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n"); //read input.txt and create string with numbers


let acc=0;
let counter =0;
FindAcc(dataList); //finds the values that make a loop infinite and calculates accumulator acc
console.log('the first part is: ', acc); // First part of the program

for (let i = 0; i < dataList.length; i++) { //second part of program, changes one line and calls funtion to see if loop ends
    let tryList = Array.from(dataList);
    let line = dataList[i];
    let instruction = line.slice(0,3); //separate lines into instructions and values

    if (instruction === 'nop') { tryList[i] = 'jmp '.concat(line.slice(4,line.length))}
    if (instruction === 'jmp') { tryList[i] = 'nop '.concat(line.slice(4,line.length))}
   
    FindAcc(tryList); //iterates over a specific change to see if we get to the end of the program  
    
}


function FindAcc(setOfInstructions) {   
    let lineNumberSet = [];
    acc=0;
    for (let j = 0; j < setOfInstructions.length; ) {
        
        if (lineNumberSet.indexOf(j) != -1) {
            break;
        }
        if (j == dataList.length-1) {
            console.log('I found the end of the program')
            console.log('The accumulator is ', acc)

            counter++;
            break;}
        
        let line = setOfInstructions[j];
        let instruction = line.slice(0,3);
        let value = Number (line.slice(4,line.length));
        // console.log(j,line, acc);
        switch (instruction) {
            case 'nop':
                lineNumberSet.push(j);
                j++;            
                break;
                case 'jmp':
                    lineNumberSet.push(j);
                    j += value;
                    break;
                    case 'acc':
                        lineNumberSet.push(j);
                        acc += value;
                        j++;
                        break;    
                        default:
                            break;
                        } 
        
    }
                        
}
 
