// const geeting = require("./geeting");
// console.log(geeting);
// console.log(process);
// // IIFE: Imediately invoke Function Expression
// const a = (function(){

// })();
// var module1 = new module1constructor();
const module1 = require('./module1');
const module2 = require('./module2');
// var a = new module1()
module1._init();
module2._test();
