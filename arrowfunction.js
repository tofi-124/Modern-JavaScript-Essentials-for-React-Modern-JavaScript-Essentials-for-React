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
  var outerVar = "outer var";
  let outerLet = "outer let";
  if (true) {
    var innerVar = "inner var";
    let innerLet = "inner let";
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
const name = "Dave";
// name = 'Someone else';
console.log(name);

const person = {
  name: "Dave",
};
person.name = "someone else";
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
  a = "yes";
} else {
  a = "no";
}

a = Math.random() > 0.5 ? "yes" : "no";

// Template Strings a.k.a. String Interpolation

const firstName = "Dave";
const lastName = "Ceddia";
const usesReact = false;

const fullName = `${firstName} ${lastName}`;
console.log(fullName);

const summary = `${fullName} ${usesReact ? "uses React" : "doesn't use React"}`;
console.log(summary);

const add = (a, b) => a + b;
const answer = `The answer is ${add(40, 2)}`;
console.log(answer);

// Rest & Spread operators
// 2 names for three dots that look the same

function printArgs(first, second, ...rest) {
  console.log(first, second, rest);
}

const user = {
  username: "dceddia",
  lastName: "Ceddia",
};
console.log({
  firstName: "Default",
  ...user,
  fullName: `${user.firstName} ${user.lastName}`,
});

const DEBUG = false;
const debug = (...args) => {
  if (DEBUG) {
    console.log(...args);
  }
};
debug("this", "works", "great");
// Destructuring arrays and objects

const nums = [1, 2, 3, 4, 5];

const [a, b, ...others] = nums;
console.log(a, b, others);
console.log(nums);

const user = {
  username: "dceddia",
  firstName: "Dave",
  lastName: "Ceddia",
  fullName: "D C",
};
const { username: uname, firstName } = user;
console.log(uname, firstName);

const { fullName = "MISSING" } = user;
console.log(fullName);

const { username, ...name } = user;
console.log(name);
console.log(user);

/// multi-level destructuring

const user2 = {
  username: "dceddia",
  firstName: "Dave",
  lastName: "Ceddia",
  posts: [
    { id: 1, title: "Best Post Ever" },
    { id: 2, title: "Second Post Ever" },
  ],
};

const {
  posts: [{ title }, { title: t2 }],
} = user2;
console.log(title);
console.log(t2);
console.log(posts);

function Counter({ initialCount }) {
  const [count, setCount] = useState(initialCount);
}

const nums = [1, 2, 3, 4];
const user = {
  username: "dceddia",
  firstName: "Dave",
  lastName: "Ceddia",
  posts: ["a", "b", "c"],
};

//after-immutability/
function setName(user, newName) {
  return {
    ...user,
    firstName: newName,
    posts: [...user.posts, "d"],
  };
}
console.log(user);
const newUser = setName(user, "someone else");
console.log(newUser);
console.log(user === newUser);
console.log(user.posts === newUser.posts);
