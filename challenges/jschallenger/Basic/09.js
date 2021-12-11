// This challenge is a little bit more complex
// Write a function that takes a number as argument
// If the number is prime, return the number
// If not, return the next higher prime number

function myFunction(number) {
  let flag = true;
  let nextPrime = number;
  while (flag) {
    flag = !isPrime(nextPrime);
    if (flag) nextPrime += 1;
  }

  return nextPrime;
}

function isPrime(num) {
  if (num === 2) return true;
  if (num % 2 === 0) return false;

  for (let i = 2; i * i < num; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

// Expected
// 41
console.log(myFunction(38));

// Expected
// 7
console.log(myFunction(7));

// Expected
// 127
console.log(myFunction(115));

// Expected
// 2003
console.log(myFunction(2000));
