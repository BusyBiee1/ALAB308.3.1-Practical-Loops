//for (let i=1; i<=100; i++) {
//    switch (i) {
//        case (i%3 === 0): {
//            console.log("Fizz")
//        }
//        case (i%5 === 0): {
//            console.log("Buzz")
//        }
//        case ((i%5 === 0) && (i%5 === 0)): {
//            console.log("Fuzz Buzz")
//            break;
//        }
//        default: {
//            console.log(`${i}`)
//        }
//    }
//} 
console.log ("Part One 'Fizz Buzz':")
for (let i=1; i<=100; i++) {
    if ((i%3 === 0) && (i%5 === 0)) {
        console.log("Fuzz Buzz")
    }    
    else if (i%3 === 0) {
         console.log("Fizz")
    }
    else if (i%5 === 0) {
         console.log("Buzz")
    }
    else {
         console.log(`${i}`)
    }
} 

console.log ("Part Two 'Prime Time':")
const prompt = require("prompt-sync")({sigint: true});
let PrimeNoToFindAfterGivenNumber = Number(prompt("Enter a number to find the next prime number: ", 0));
//console.log(`PrimeNoToFindAfterGivenNumber=${PrimeNoToFindAfterGivenNumber}`);
let NextPrimeNoToFindAfterGivenNumber = PrimeNoToFindAfterGivenNumber + 1;
//console.log(`NextPrimeNoToFindAfterGivenNumber=${NextPrimeNoToFindAfterGivenNumber}`);
for (let i=NextPrimeNoToFindAfterGivenNumber; i>0; i++) {
    let ThisNoIsNotPrimeSoGetNextNo=false;
 // console.log(`i=${i}`);
    for (let j=2; j<i; j++) {
   //   console.log(`i=${i}`);
   //   console.log(`j=${j}`);
   //   console.log(`i%j=${i%j}`);
        if (i%j === 0) {
            ThisNoIsNotPrimeSoGetNextNo=true;
            break;
        }
    }
    if (!ThisNoIsNotPrimeSoGetNextNo) {
        NextPrimeNoToFindAfterGivenNumber = i;
    //  console.log(`Prime number after ${PrimeNoToFindAfterGivenNumber} is ${i}`);
        console.log(`Prime number after ${PrimeNoToFindAfterGivenNumber} is ${NextPrimeNoToFindAfterGivenNumber}`);
        break;
    } 
}
