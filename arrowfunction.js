//Object manipulation using arrow function
const FullNameUsingObj = (first, last, email) => ({
  first,
  email,
  last,
});
console.log(FullNameUsingObj("tofik", "mohammed", "tofikahm@yahoo.com"));

//This in arrow function
("use strict");
const printThis = () => {
  console.log(this);
};
printThis.bind(42)();

// function vs block scope
//   var: scoped to the enclosing function
//   let: scoped to the enclosing block
function scopeTest() {
  var outerVar = 'outer var';
  let outerLet = 'outer let';
  if (true) {
    var innerVar = 'inner var';
    let innerLet = 'inner let';
  }
}
scopeTest();

// var vs. let inside a closure
//   var: creates one variable, closure latches on
//   let: creates a new variable for each iteration
function printNumbers() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}
printNumbers();

// let, const
const name = 'Dave';
// name = 'Someone else';
console.log(name);

const person = {
  name: 'Dave'
};
person.name = 'someone else';
console.log(person);

const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

// Statements vs. Expressions

// *** Statements

/*
let a = 1 + 2
if(true) {
  //
}
for(...)
while(...)
try {
} catch(e) {
}
*/

// *** Expressions
var a = { hi: true };

function stuff() {
  return { hi: true };
}

if (Math.random() > 0.5) {
  a = 'yes';
} else {
  a = 'no';
}

a = Math.random() > 0.5 ? 'yes' : 'no';