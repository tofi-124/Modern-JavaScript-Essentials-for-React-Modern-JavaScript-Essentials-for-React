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
