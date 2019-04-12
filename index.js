// console.log(typeof dosomething);
// dosomething();
// var dosomething = function dosomething() {
//     console.log('did something')
// }

// var obj = {
//     id: 42,
//     counter: function counter() {
//       setTimeout(() => {
//         console.log(this.id);
//       }, 1000);
//     }
//   };
//   console.log(obj.counter())

// function myFunc(a, b, ...args) {
//     console.log(a); // 22
//     console.log(b); // 98
//     console.log(args); // [43, 3, 26]
//    };
//    myFunc(22, 98, 43, 3, 26);
// function test(){
//     const something = {x: 1, y: 2, z: 3};
//     const somethingNew = {c:1, ...something}
//     console.log(somethingNew);
// }
// test();

// "use strict";
// var arguments = 3.14;    // This will cause an error 

function getJSON(url) {
    return fetch(url).then(response => response.json());
}
  
getJSON('https://github.com/')
.then(function(user) {
    return getJSON(user.favouritesURL);
})
.then(function(favourites) {
    console.log('Favourites:', favourites);
});