const fs = require("fs");

console.log("1");

const reader = fs.readFileSync("file.txt");
console.log("file:" + reader);
console.log("2");

