// Write a function that takes an array of strings as argument
// It should return the array with its values sorted alphabetically

function myFunction(alphabets) {
  return alphabets.sort();
}

myFunction(["b", "c", "d", "a"]);
// Expected
// ['a', 'b', 'c', 'd']

myFunction(["z", "c", "d", "a", "y", "a", "w"]);
// Expected
// ['a', 'a', 'c', 'd', 'w', 'y', 'z']
