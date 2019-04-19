// ES5 Message queue
console.log('Hi');
setTimeout(() => {
  console.log('cb1');
}, 5000);
console.log('Bye');
// output
// Hi
// Bye
// cb1

// ES6 Message queue
const networkRequest = () => {
  setTimeout(() => {
    console.log('Async Code');
  }, 0);
};

console.log('Hello World');
networkRequest();
console.log('The End');
// output
// Hello World
// The End
// Async Code


// ES6 Job Queue/ Micro-Task queue
console.log('Script start');
setTimeout(() => {
  console.log('setTimeout');
}, 0);
new Promise((resolve, reject) => {
  resolve('Promise resolved');
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
console.log('Script End');
// output

// Script start
// Script End
// Promise resolved
// setTimeout

console.log('Script start');
setTimeout(() => {
  console.log('setTimeout 1');
}, 0);
setTimeout(() => {
  console.log('setTimeout 2');
}, 0);
new Promise((resolve, reject) => {
  resolve('Promise 1 resolved');
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
new Promise((resolve, reject) => {
  resolve('Promise 2 resolved');
})
  .then(res => console.log(res))
  .catch(err => console.log(err));
console.log('Script End');

// output

// Script start
// Script End
// Promise 1 resolved
// Promise 2 resolved
// setTimeout 1
// setTimeout 2
