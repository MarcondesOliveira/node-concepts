var fs = require("fs");
var zlib = require('zlib');

// Compress the file input.txt to input.txt.gz
fs.createReadStream('input.txt')
   .pipe(zlib.createGzip())
  //  .pipe(fs.createWriteStream('input.txt.gz'));
   .pipe(fs.createWriteStream('inputDecompressed.txt'));
  
// console.log("File Compressed.");
console.log("File Decompressed.");
