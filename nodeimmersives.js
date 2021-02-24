// Check the get-input.js code as well as the README for the lowdown on the beefing up we've done!
const getInput = require("./get-input.js");

//User Name
const input1 = getInput(0)
const input2 = getInput(1)
const fullName = `${input1} ${input2}`
console.log(`Hi ${input1} ${input2} how are you today?`);
// All Caps
const fName = input1.toUpperCase();
const lName = input2.toUpperCase();
console.log (`Here is your name in all caps: ${fName} ${lName}`);
//Initials
console.log(`Your initials are ${fName[0]}.${lName[0]}.`)
console.log(`Your email address is: ${fName}.${lName}@codeimmersives.com`);