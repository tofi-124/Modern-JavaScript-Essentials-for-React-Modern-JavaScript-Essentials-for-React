const FullNameUsingObj = (first, last, email) => ({
  first,
  email,
  last,
});

console.log(FullNameUsingObj("tofik", "mohammed", "tofikahm@yahoo.com"));
//Logs { first: 'tofik', email: 'tofikahm@yahoo.com', last: 'mohammed' }

