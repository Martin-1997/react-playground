// const name = 'mario';

// console.log(name)

// Browsers have a global window object which allows us to access certain functionalities. We also have a global object in Node.js. f.e., to call the function window.setTimeout(), can simply call setTimeout() as the global object is referenced anyway. Browser specific objects, like the document/DOM cannot be accessed in node.js

//console.log(global);

// setTimeout(() => {
//     console.log("Timeout is over");
//     clearInterval(interval)
// },3000);

// const interval = setInterval(() => {
//     console.log("In the interval")
// }, 1000)

console.log(__dirname)
console.log(__filename)
