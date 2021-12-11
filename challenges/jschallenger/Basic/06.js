// Write a function that takes two strings, say a and b, as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation

function myFunction(a, b) {
  return a.includes(b) ? b + a : a + b;
}

// Expected
// 'cheesecake'
myFunction("cheese", "cake");

// Expected
// 'slips'
myFunction("lips", "s");

// Expected
// 'Javascript'
myFunction("Java", "script");

// Expected
// 'I think, therefore I am'
myFunction(" think, therefore I am", "I");
