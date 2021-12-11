// Write a function that takes an array of objects and a string as arguments
// Add a property with key 'continent' and value equal to the string to each of the objects
// Return the new array of objects
// Tipp: try not to mutate the original array

function myFunction(array, continent) {
  return array.map((element) => ({ ...element, continent }));
}

myFunction(
  [
    { city: "Tokyo", country: "Japan" },
    { city: "Bangkok", country: "Thailand" },
  ],
  "Asia"
);
// Expected
// [{ city: 'Tokyo', country: 'Japan', continent: 'Asia' }, { city: 'Bangkok', country: 'Thailand', continent: 'Asia' }]

myFunction(
  [
    { city: "Stockholm", country: "Sweden" },
    { city: "Paris", country: "France" },
  ],
  "Europe"
);
// Expected
// [{ city: 'Stockholm', country: 'Sweden', continent: 'Europe' }, { city: 'Paris', country: 'France', continent: 'Europe' }]
