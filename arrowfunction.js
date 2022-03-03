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

//find and findIndex
const spices = [
  { id: 1, name: "Black Pepper" },
  { id: 2, name: "Turmeric" },
  { id: 3, name: "Cumin" },
  { id: 4, name: "Coriander" },
  { id: 6, name: "Coriander" },
  { id: 7, name: "Coriander" },
  { id: 5, name: "Chili Powder" },
];

const spiceIndex = spices.findIndex((spice) => {
  return spice.name === "Coriander";
});

const spice = spices.find((spice) => {
  return spice.name === "cumin";
});

//Splice and slice
const word = ["c", "o", "d", "e"];
let copy = [...word];
copy.splice(1, 2, "x", "y");
console.log(copy);
console.log(word);

//Concat
const numbers = [1, 2, 3, 4];
const moreNumbers = [5, 6, 7, 8];

// console.log(numbers.push(1000))  // modifies 'numbers'

// a few ways to add items to an array immutably:
console.log(numbers.concat(1000));
console.log(numbers.concat(1000, 200, 300));
console.log(numbers.concat(moreNumbers));
console.log([0, ...numbers, 4.5, ...moreNumbers, 9]);
console.log(numbers);

//Map & Filtering
const people = [
  {
    first: "Dan",
    last: "Abramov",
    handle: "@dan_abramov",
  },
  {
    first: "Ali",
    last: "Spittel",
    handle: "@ASpittel",
  },
  {
    first: "Sarah",
    last: "Drasner",
    handle: "@sarah_edo",
  },
];

const names = people.map((person, index) => {
  return {
    ...person,
    first: person.first + "!!!",
  };
});
console.log(names);
console.log(people);

const filteredNames =  people.filter(person => {
  return person.name === 'Sarah';
})

//Reduce
const veggieDrawer = [
  "3 apples",
  "2 bad tomatoes",
  "fresh celery",
  "4 good onions",
  "1 bad onion",
  "rotten cilantro",
  "2 rotten red peppers",
  "garlic",
];

function reducer(bucket, item) {
  const count = parseInt(item);
  if (item.includes("bad") || item.includes("rotten")) {
    bucket.badVeggies.push(item);
    bucket.howManygoodVeggies += isNaN(count) ? 1 : count;
    return bucket;
  } else {
    bucket.goodVeggies.push(item);
    bucket.howManybadVeggies += isNaN(count) ? 1 : count;
    return bucket;
  }
}

initialItem = {
  goodVeggies: [],
  howManygoodVeggies: 0,
  badVeggies: [],
  howManybadVeggies: 0,
};
Veggies = veggieDrawer.reduce(reducer, initialItem);

console.log(Veggies);
