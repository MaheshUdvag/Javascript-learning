// Write a function that takes a string as argument
// As it is, the string has no meaning
// Increment each letter to the next letter in the alphabet
// Return the correct word

function myFunction(stringA) {
  let correctWord = "";
  for (let i = 0; i < stringA.length; i++) {
    correctWord += String.fromCharCode(stringA.charCodeAt(i) + 1);
  }
  return correctWord;
}

// Expected
// 'coding'
console.log(myFunction("bnchmf"));

// Expected
// 'cheese'
console.log(myFunction("bgddrd"));

// Expected
// 'testing'
console.log(myFunction("sdrshmf"));
