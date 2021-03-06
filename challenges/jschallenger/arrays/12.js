// Write a function that takes an array of strings as argument
// Group those strings by their first letter
// Return an object that contains properties with keys representing first letters
// The values should be arrays of strings containing only the corresponding strings
// For example, the array ['Alf', 'Alice', 'Ben'] should be transformed to
// { a: ['Alf', 'Alice'], b: ['Ben']}

function myFunction(array) {
  let obj = {};
  array.forEach((element) => {
    const s = element.charAt(0).toLowerCase();
    obj[s] = obj[s] === undefined ? [element] : [...obj[s], element];
  });
  return obj;
}

// Author
//  return array.reduce((acc, cur) => {
//     const firstLetter = cur.toLowerCase().charAt(0);
//     return { ...acc, [firstLetter]: [...(acc[firstLetter] || []), cur] };
//   }, {});

myFunction(["Alf", "Alice", "Ben"]);
// Expected
// { a: ['Alf', 'Alice'], b: ['Ben']}

myFunction(["Ant", "Bear", "Bird"]);
// Expected
// { a: ['Ant'], b: ['Bear', 'Bird']}

myFunction(["Berlin", "Paris", "Prague"]);
// Expected
// { b: ['Berlin'], p: ['Paris', 'Prague']}
