/*Assignment 1
    -Working with Files
        Create a file FilesApp.js which uses the fs Module.
        Assume there is a file with name input.txt in the same directory of FilesApp.js
        Write code to read contents from the file first asynchronously and then synchronously.
        Execute FilesApp.js
*/
const fs = require('fs');

fs.readFile('./input.txt','UTF-8',(err,data) => {
    console.log("Async Data.......");
    console.log(data);
});

console.log("Sync Data.......");
const data= fs.readFileSync('./input.txt','UTF-8');
console.log(data);