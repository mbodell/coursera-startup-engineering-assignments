#!/usr/bin/env node
var fs = require('fs');
var outfile = "primes.txt";
function isPrime(num) {
  if(num < 2) {
    return false;
  }
  if(num == 2) {
    return true;
  }
  var test = 2;
  var stop = Math.ceil(Math.sqrt(num)) + 1;
  for(test = 2; test < stop; test++) {
    if(num % test == 0) {
      return false;
    }
  }
  return true;
}
var index = 0;
var number = 2;
var out = "";
for(index = 0; index < 100; number++) {
  if(isPrime(number)) {
    out = out + number + ",";
    index++;
  }
}
// Remove extra ',' char
out = out.substring(0, out.length - 1);
fs.writeFileSync(outfile, out);  
console.log("Script: " + __filename + "\nWrote: " + out + "To: " + outfile);
