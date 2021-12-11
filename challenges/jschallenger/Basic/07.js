// Write a function that takes a number as argument
// The function should split the number into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting

function myFunction(number) {
  return number
    .toString()
    .split("")
    .map((digit) => parseInt(digit));
}

// Expected
// [1,0]
myFunction(10);

// Expected
// [9,3,1]
myFunction(931);

// Expected
// [1,9,3,2,7,8]
myFunction(193278);
