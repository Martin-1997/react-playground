// with large files, it is more efficient to use streams -> we can then use data before the file is completely read -> data is read in small buffers

const fs = require('fs');

// // create large file
// text = ""
// for (let i = 0; i < 100000; i++) {
//     text += `Line ${i} \n`;
// }
// fs.appendFile('./files/large_file.txt',text, function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });

const readStream = fs.createReadStream('./files/large_file.txt', {encoding : 'utf8'}) // we do not need to use .toString() on the individual chunks if we specify the encoding beforehand
const writeStream = fs.createWriteStream('./files/write_large_file.txt', {encoding : 'utf8'})

// When we get a data event from readStream, we execute the function on it
// readStream.on('data', (chunk) => {
//     console.log("----- New CHUNK -----")
//     console.log(chunk)
//     // console.log(chunk.toString())
//     writeStream.write('\n NEW CHUNK \n')
//     writeStream.write(chunk)
// })


// Pipeing - does basically the same as the code above
readStream.pipe(writeStream)

