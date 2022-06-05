let rn = require("./romanNumerals.js");

console.log(rn.toRoman(1) === 'I');
console.log(rn.toRoman(3) === 'III');
console.log(rn.toRoman(4) === 'IV');
console.log(rn.toRoman(99) == 'XCIX')
console.log(rn.toRoman(949) == 'CMXLIX')
console.log(rn.toRoman(888) == 'DCCCLXXXVIII')

// output: 
// true
// true
// true
// true
// true
// true