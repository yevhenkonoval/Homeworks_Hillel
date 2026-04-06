const prompt = require('prompt-sync')();

const x = prompt("Enter x:");
const y = prompt("Enter y:");

let result = 1;

for (let i = 0; i < y; i++) {
    result = result * x;
}

console.log(result);