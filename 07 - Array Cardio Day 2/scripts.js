
// ## Array Cardio Day 2

const people = [
  { name: 'Wes', year: 1988 },
  { name: 'Kait', year: 1986 },
  { name: 'Irv', year: 1970 },
  { name: 'Lux', year: 2015 }
];

const comments = [
  { text: 'Love this!', id: 523423 },
  { text: 'Super good', id: 823423 },
  { text: 'You are the best', id: 2039842 },
  { text: 'Ramen is my fav food ever', id: 123523 },
  { text: 'Nice Nice Nice!', id: 542328 }
];

console.table(people);
// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const nineteen = people.some(p => 2025 - p.year >= 19);
console.log(`Is anyone at least 19 years old ?\n${nineteen}`);
// Array.prototype.every() // is everyone 19 or older?
const allNineteens = people.every(p => 2025 - p.year >= 19);
console.log(`Is everyone at least 19 years old ?\n${allNineteens}`)

console.table(comments);
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const id = comments.find(c => c.id == 823423);
console.log(`ID 823423`)
console.table(id);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index = comments.findIndex(c => c.id === 823423);
console.log(`index: ${index}`);
comments.splice(index, 1);
console.table(comments);

