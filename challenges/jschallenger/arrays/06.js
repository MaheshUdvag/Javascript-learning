// Write a function that takes arguments an arbitrary number of arrays
// It should return an array containing the values of all arrays

function myFunction(...args) {
  // alternate args.flat()
  return args.reduce((prev, current) => [...prev, ...current]);
}

// Expected
// [1, 2, 3, 4, 5, 6]
console.log(myFunction([1, 2, 3], [4, 5, 6]));

// Expected
// ['a', 'b', 'c', 4, 5, 6]
console.log(myFunction(["a", "b", "c"], [4, 5, 6]));

// Expected
// [true, true, 1, 2, 'a', 'b']
console.log(myFunction([true, true], [1, 2], ["a", "b"]));
