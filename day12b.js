/*020 Day 12 part 2 advent calendar ZTM puzzle solution by Felipe Moreno

--- Part Two ---
Before you can give the destination to the captain, you realize that the actual action meanings were printed on the back of the instructions the whole time.

Almost all of the actions indicate how to move a waypoint which is relative to the ship's position:

Action N means to move the waypoint north by the given value.
Action S means to move the waypoint south by the given value.
Action E means to move the waypoint east by the given value.
Action W means to move the waypoint west by the given value.
Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
Action F means to move forward to the waypoint a number of times equal to the given value.
The waypoint starts 10 units east and 1 unit north relative to the ship. The waypoint is relative to the ship; that is, if the ship moves, the waypoint moves with it.

For example, using the same instructions as above:

F10 moves the ship to the waypoint 10 times (a total of 100 units east and 10 units north), leaving the ship at east 100, north 10. The waypoint stays 10 units east and 1 unit north of the ship.
N3 moves the waypoint 3 units north to 10 units east and 4 units north of the ship. The ship remains at east 100, north 10.
F7 moves the ship to the waypoint 7 times (a total of 70 units east and 28 units north), leaving the ship at east 170, north 38. The waypoint stays 10 units east and 4 units north of the ship.
R90 rotates the waypoint around the ship clockwise 90 degrees, moving it to 4 units east and 10 units south of the ship. The ship remains at east 170, north 38.
F11 moves the ship to the waypoint 11 times (a total of 44 units east and 110 units south), leaving the ship at east 214, south 72. The waypoint stays 4 units east and 10 units south of the ship.
After these operations, the ship's Manhattan distance from its starting position is 214 + 72 = 286.

Figure out where the navigation instructions actually lead. What is the Manhattan distance between that location and the ship's starting position?*/


let fs = require("fs");
let path = require('path');
let instructionsPath = path.join(__dirname, 'input day 12.txt'); //create path of input.txt file which contains list of instructions
let dataList = fs.readFileSync(instructionsPath).toString().split("\n"); //read input.txt 
let position =[0,0];
let waypoint = [10,1];


dataList.forEach(element => {
    let instruction = element.slice(0,1);
    let distance = Number (element.slice(1,element.length));
    let heading = distance/90;   //for when degrees are given
    let relativePosition = [waypoint[0]-position[0],waypoint[1]-position[1]];
    // console.log( instruction,distance, position, waypoint, relativePosition);
    switch (instruction) {
        case 'N':
            waypoint[1] += distance;
            break;
        case 'S':
            waypoint[1] -= distance;           
                
                break;
        case 'E':
            waypoint[0] += distance;                
            break;
        case 'W':
            waypoint[0] -= distance;            
            break;
        case 'R':                        
            if (heading ==1) waypoint = [position[0]+ relativePosition [1], position[1]+(-relativePosition[0])];
            else if (heading ==2) waypoint = [position[0]+(-relativePosition [0]),position[1]+ (-relativePosition[1])];
            else if (heading ==3) waypoint = [position[0]+ (-relativePosition [1]), position[1]+relativePosition[0]];
            break;
        case 'L':
            if (heading ==1) waypoint = [position[0]+ (-relativePosition [1]), position[1] + relativePosition[0]];
            else if (heading ==2) waypoint = [position[0]+ (-relativePosition [0]),position[1]+ (-relativePosition[1])];
            else if (heading ==3) waypoint = [position[0]+ relativePosition [1],position[1]+ (-relativePosition[0])];          
            break;
        case 'F':
           position = [position [0]+(distance*relativePosition[0]), position[1]+ (distance*relativePosition[1])];
           waypoint = [position[0]+relativePosition[0], position[1]+relativePosition[1]];
            
            break;
    
        default:
            break;
    }
    

    // instructions.push( Number(element));
});

console.log(position, position[0]+position[1]);