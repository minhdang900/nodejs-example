// Initialize array
const array1 = [1, 0, 3, 2, 0];
const initial = () => {
  const array = [];
  const array2 = Array.of(1, 3, 2, 0);
  const array3 = Array(6).fill(1);
  console.log(array);
  console.log(array1);
  console.log(array2);
  console.log(array3);
};

// Iterating the array
// Iterates array1 until f() returns false
const iterateEvery = () => {
  console.log('Iterates with every');
  const result = array1.every((item) => {
    console.log(item);
    return item < 3;
  });
  console.log(result);
};

// Iterates array1 until f() returns true
const iterateSome = () => {
  console.log('iterates with some');
  const result = array1.some((item) => {
    console.log(item);
    return item < 3;
  });
  console.log(result);
};

// Iterate the array and return a new one with the returned result of a function
const mapArray = array1.map(item => item);
console.log(mapArray);

// Filter an array
const filterArray = array1.filter(item => item > 1);
console.log(filterArray);

// Reduce
array1.reduce((accumulator, currentValue, currentIndex, array) => {
  console.log(accumulator);
  return accumulator + currentValue;
}, 1);

// forEach ES6, without way to stop
array1.forEach((item) => {
  console.log(item);
});

// for

// add to an array
const addArray = () => {
  array1.push(4);
  array1.unshift(0);
  array1.unshift(-2, -1);
  console.log(array1);
};
// remove
const removeArray = () => {
  // remote item from the end
  array1.pop();
  // remove item from the beginning
  array1.shift();
  // get first 2 items
  array1.splice(0, 2);
  // get the 2 items starting from index 3
  array1.splice(3, 2);
  // remote and insert in place
  // remove 3 items starting from index 2 and add 2 items starting from index 2
  array1.splice(2, 3, 2, 'a', 'b');
};
// Join multiple arrays
const joinArray = () => {
  const arr = [9, 10];
  array1.concat(arr);
};
