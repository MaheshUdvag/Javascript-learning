// Write a function that takes an array and a value as argument
// The function should clean the array from all occurrences of the given value and return the the cleaned version

function myFunction(array, value) {
  return array.filter((element) => element !== value);
}

myFunction([1, 2, 3], 2);
// Expected
// [1, 3]

myFunction([1, 2, "2"], "2");
// Expected
// [1, 2]

myFunction([false, "2", 1], false);
// Expected
// ['2', 1]

myFunction([1, 2, "2", 1], 1);
// Expected
// [2, '2']
