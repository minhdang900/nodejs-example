function f(message) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(message);
    }, 500);
  });
}
f('Hello').then((result) => {
  console.log(result);
//   null.abc;
  return f('Hello world');
}, (err) => {
  console.log(err);
}).then((result) => {
  console.log('1111');
  console.log(result);
}).catch((err) => {
  console.log('catch');
  console.log(err);
});
// job queue / micro-task queue
const microTask = () => {
  console.log('Script start');
  setTimeout(() => {
    console.log('setTimeout 1');
  }, 0);
  setTimeout(() => {
    console.log('setTimeout 2');
  }, 0);
  new Promise((resolve, reject) => {
    resolve('Promise 1 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
  new Promise((resolve, reject) => {
    resolve('Promise 2 resolved');
  }).then(res => console.log(res))
    .catch(err => console.log(err));
  console.log('Script End');
};
microTask();
