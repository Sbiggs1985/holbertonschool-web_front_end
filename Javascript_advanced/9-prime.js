/** @format */

function countPrimeNumbers() {
  const start = performance.now();

  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  let count = 0;
  for (let i = 2; i <= 100; i++) {
    if (isPrime(i)) {
      count++;
    }
  }

  const end = performance.now();
  const executionTime = end - start;

  console.log(
    `Execution time of printing countPrimeNumbers was ${executionTime} milliseconds.`
  );

  return count;
}

// Call the function
const primeCount = countPrimeNumbers();

// Log the number of prime numbers found
console.log(`Number of prime numbers between 2 and 100: ${primeCount}`);
