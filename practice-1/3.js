const sortCharactersInString = str => [...str].sort((a, b) => a.localeCompare(b)).join('');

console.log(sortCharactersInString('cabbage'));

console.log(sortCharactersInString('a7fs23l1n4o6x'));