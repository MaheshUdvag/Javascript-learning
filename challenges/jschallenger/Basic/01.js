// Write a function that takes an object with the properties number and percentage as argument
// Return the given percentage of the number

function myFunction({ number, percentage }) {
  return (number * percentage) / 100;
}

// Expected
// 50
myFunction({ number: 100, percentage: 50 });
// Expected
// 15.54
myFunction({ number: 777, percentage: 2 });
// Expected
// 495
myFunction({ number: 500, percentage: 99 });
