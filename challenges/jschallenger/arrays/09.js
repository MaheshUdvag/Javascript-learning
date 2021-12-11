// Write a function that takes an array and a number, say num, as arguments
// Sum up all array elements with a value greater than num
// Return the sum

function myFunction(array, num) {
  return array
    .filter((value) => value > num)
    .reduce((prev, current) => prev + current);

  //   return array.reduce((sum, current) => (current > num ? sum + current : sum),0);
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
// Expected
// 25

console.log(myFunction([-10, -11, -3, 1, -4], -3));
// Expected
// 1

console.log(myFunction([78, 99, 100, 101, 401], 99));
// Expected
// 602
