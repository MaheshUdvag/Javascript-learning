// Write a function that takes two numbers, say min and max, as arguments
// Return an array of numbers in the range min to max

function myFunction(start, end) {
  let array = [];
  for (let i = start; i <= end; i++) {
    array.push(i);
  }
  return array;
}

myFunction(2, 10);
// Expected
// [2, 3, 4, 5, 6, 7, 8, 9, 10]

myFunction(1, 3);
// Expected
// [1, 2, 3]

myFunction(-5, 5);
// Expected
// [-5, -4, -3, -2, -1, 0,  1,  2,  3,  4, 5]

myFunction(2, 7);
// Expected
// [2, 3, 4, 5, 6, 7]
