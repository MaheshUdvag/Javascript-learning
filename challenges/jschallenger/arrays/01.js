// Write a function that takes an array as argument
// It should return true if all elements in the array are equal
// It should return false otherwise

function myFunction(arr) {
  const firstElement = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[0] !== arr[i]) return false;
  }
  return true;
}

// Expected
// true
console.log(myFunction([true, true, true, true]));
// Expected
// true
console.log(myFunction(["test", "test", "test"]));
// Expected
// false
console.log(myFunction([1, 1, 1, 2]));
// Expected
// false
console.log(myFunction(["10", 10, 10, 10]));
