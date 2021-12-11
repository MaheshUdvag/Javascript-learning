// Write a function that takes an object as argument
// Some of the property values contain empty strings
// Replace empty strings and strings that contain only whitespace with null values
// Return the resulting object

function myFunction(obj) {
  return Object.keys(obj).reduce(
    (object, key) =>
      obj[key].trim() === ""
        ? { ...object, [key]: null }
        : { ...object, [key]: obj[key] },
    {}
  );
}

// Author
// function myFunction(obj) {
//     const newObj = { ...obj };
//     for (key in newObj) {
//       if (newObj[key].trim() === '') newObj[key] = null;
//     }
//     return newObj;
//   }

myFunction({ a: "a", b: "b", c: "" });
// Expected
// { a: 'a', b: 'b', c: null }

myFunction({ a: "", b: "b", c: " ", d: "d" });
// Expected
// { a: null, b: 'b', c: null, d: 'd' }

myFunction({ a: "a", b: "b ", c: " ", d: "" });
// Expected
// { a: 'a', b: 'b ', c: null, d: null }
