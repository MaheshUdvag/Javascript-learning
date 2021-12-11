// Write a function that takes an array with arbitrary elements and a number as arguments
// Return a new array, the first element should be either the given number itself
// or zero if the number is smaller than 6
// The other elements should be the elements of the original array
// Try not to mutate the original array

function myFunction(array, num) {
  return num < 6 ? [0, ...array] : [num, ...array];
}

// return [...(num > 5 ? [num] : [0]), ...array];

myFunction([1, 2, 3], 6);
// Expected
// [6,1,2,3]

myFunction(["a", "b"], 2);
// Expected
// [0,'a','b']

myFunction([null, false], 11);
// Expected
// [11,null,false]
