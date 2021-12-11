// Write a function that takes a number as argument
// If the number is a whole number (has no decimal place), return true
// Otherwise, return false

function myFunction(number) {
  return Number.isInteger(number);
}

// Expected
// true
myFunction(4);

// Expected
// false
myFunction(1.123);

// Expected
// true
myFunction(1048);

// Expected
// false
myFunction(10.48);
