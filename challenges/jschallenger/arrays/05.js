// Write a function that takes an array of strings as argument
// It should return the longest string

function myFunction(array) {
  return array.reduce((prev, current) =>
    prev.length > current.length ? prev : current
  );
}

console.log(myFunction(["help", "me"]));
// Expected
// 'help'
console.log(myFunction(["I", "need", "candy"]));
// Expected
// 'candy'
