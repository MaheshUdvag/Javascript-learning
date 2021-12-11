// Write a function that takes a two strings as arguments
// Return the number of times the first string occurs in the second string

function myFunction(stringA, stringB) {
  return stringB.toLowerCase().split(stringA).length - 1;
}

// Expected
// 2
myFunction("m", "How many times does the character occur in this sentence?");
// Expected
// 4
myFunction("h", "How many times does the character occur in this sentence?");
// Expected
// 1
myFunction("?", "How many times does the character occur in this sentence?");
// Expected
// 0
myFunction("z", "How many times does the character occur in this sentence?");
