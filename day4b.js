/*2020 Day 4-b advent calendar ZTM puzzle solution by Felipe Moreno

The line is moving more quickly now, but you overhear airport security talking about how passports with invalid data are getting through. Better add some data validation, quick!

You can continue to ignore the cid field, but each other field has strict rules about what values are valid for automatic validation:

byr (Birth Year) - four digits; at least 1920 and at most 2002.
iyr (Issue Year) - four digits; at least 2010 and at most 2020.
eyr (Expiration Year) - four digits; at least 2020 and at most 2030.
hgt (Height) - a number followed by either cm or in:
If cm, the number must be at least 150 and at most 193.
If in, the number must be at least 59 and at most 76.
hcl (Hair Color) - a # followed by exactly six characters 0-9 or a-f.
ecl (Eye Color) - exactly one of: amb blu brn gry grn hzl oth.
pid (Passport ID) - a nine-digit number, including leading zeroes.
cid (Country ID) - ignored, missing or not.
Your job is to count the passports where all required fields are both present and valid according to the above rules. Here are some example values:

byr valid:   2002
byr invalid: 2003

hgt valid:   60in
hgt valid:   190cm
hgt invalid: 190in
hgt invalid: 190

hcl valid:   #123abc
hcl invalid: #123abz
hcl invalid: 123abc

ecl valid:   brn
ecl invalid: wat

pid valid:   000000001
pid invalid: 0123456789
Here are some invalid passports:

eyr:1972 cid:100
hcl:#18171d ecl:amb hgt:170 pid:186cm iyr:2018 byr:1926

iyr:2019
hcl:#602927 eyr:1967 hgt:170cm
ecl:grn pid:012533040 byr:1946

hcl:dab227 iyr:2012
ecl:brn hgt:182cm pid:021572410 eyr:2020 byr:1992 cid:277

hgt:59cm ecl:zzz
eyr:2038 hcl:74454a iyr:2023
pid:3556412378 byr:2007
Here are some valid passports:

pid:087499704 hgt:74in ecl:grn iyr:2012 eyr:2030 byr:1980
hcl:#623a2f

eyr:2029 ecl:blu cid:129 byr:1989
iyr:2014 pid:896056539 hcl:#a97842 hgt:165cm

hcl:#888785
hgt:164cm byr:2001 iyr:2015 cid:88
pid:545766238 ecl:hzl
eyr:2022

iyr:2010 hgt:158cm hcl:#b6652a ecl:blu byr:1944 eyr:2021 pid:093154719
Count the number of valid passports - those that have all required fields and valid values. Continue to treat cid as optional. In your batch file, how many passports are valid?

*/


let fs = require("fs");
let path = require('path');
let numbersPath = path.join(__dirname, 'input day 4.txt'); //create path of input.txt file which contains list of numbers
let dataList = fs.readFileSync(numbersPath).toString().split("\n\n"); //read input.txt and split it into passports
let counter = 0;
let acc = 0;
console.time('time is');


dataList.forEach(element => {    
    acc++;
    let passport={};    
    var KeyVal = element.split(/\s|\n/); //split each passport into keys and values by space or return
    
    for (let i in KeyVal) {
        KeyVal[i] = KeyVal[i].split(/:/);
        passport[KeyVal[i][0]]=KeyVal[i][1];        
    } // fill passport object with keys and values

    let passportFields = Object.keys(passport).length;
    let eyeColor = ["amb", "blu" , "brn", "gry", "grn", "hzl", "oth"];  

    if (passportFields==8 || (passportFields==7 && !('cid' in passport))) {        
         if (Number(passport.byr)>=1920 && Number(passport.byr)<=2002) {
            if (Number(passport.iyr)>=2010 && Number(passport.iyr)<=2020) {
                if (Number(passport.eyr)>=2020 && Number(passport.eyr)<=2030) {
                    if (eyeColor.some(r=> passport.ecl.includes(r)) ) {
                        if (Number(passport.pid.length) == 9) {
                            let heightCm = Number(passport.hgt.substring(0,3));
                            let heightIn = Number(passport.hgt.substring(0,2));
                            if ((passport.hgt.includes("cm") && (heightCm >=150 && heightCm <= 193)) ||
                                (passport.hgt.includes("in") && (heightIn >=59 && heightIn <= 76))) {
                                    let hairColour = passport.hcl.includes("/[g-z]/")
                                    if (passport.hcl.length ==7 && passport.hcl[0] === '#' && !hairColour) {
                                        // console.log(passport, passportFields,  passport.hcl, !hairColour, counter, acc);                                        
                                        counter++; }
                                    
                        
                                }
                        }
                    }

                }
                
            }      
        }
    }
    // else {


    // }

    // if (acc > 80) break;




    // passport={};    
    // var KeyVal = element.split(/\s|\n/); //split each passport into keys and values by space or return
    // var i;
    // for (i in KeyVal) {
    //     KeyVal[i] = KeyVal[i].split(/:/);
    //     passport[KeyVal[i][0]]=KeyVal[i][1];        
    // }
    // console.log(passport.ecl, passport.pid+2);

    


    // let fieldsInString = element.split(/[:\s\n/]+/); //break passports into categories
    // let passportFields = fieldsInString.length/2; 
    // if (passportFields<7 || ( passportFields==7 && fieldsInString.includes("cid"))) {} else {counter++;}  // just count the right passports 
        //console.log(fieldsInString, passportFields,  fieldsInString.includes("cid"), counter) 
    
    //console.log(fieldsInString, fieldsInString.length/2);
});

    
// });
console.timeEnd('time is');
console.log("The number of valid passports is" ,counter);





