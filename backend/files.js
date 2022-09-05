const fs = require('fs');

// These functions are asynchronous, therefore we need to use callback functions to perform action after the original task

// reading files
// fs.readFile('./files/test.txt', (err,data) => {
//     if (err) {
//         console.log(err);
//     } else {
//         // console.log(data); // this simply prints the buffer in hex, not the text itself
//         console.log(data.toString());
//     }
// })

// writing files
// fs.writeFile('./files/write.txt', "Write this text", () => {
//     console.log("File was written!")
// });

// directories
// const directory = './files/assets';
// // check if directory exists, because otherwise an error is thrown
// if (!fs.existsSync(directory)){
//     fs.mkdir(directory, (err) => {
//         if (err){
//             console.log(err);
//         } else {
//             console.log(`Folder ${directory} created!`)
//         }
//     })
// } else {
//     console.log(`Folder ${directory} already exits, therefore we delete it`)
//     fs.rmdir(directory, (err) => {
//         if (err) {
//             console.log(err)
//         } else {
//             console.log(`Folder ${directory} has been deleted`)
//         }
//     })
// }

// delete files
file = "./files/exists.txt"
if (fs.existsSync(file)){
    fs.unlink(file, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log(`file ${file} has been deleted`)
        }
    })
} else {
    console.log(`${file} does not exist`)
}
