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

  function calculatePrime() {
    if (count < 100) {
      for (let i = 2; i <= 100; i++) {
        if (isPrime(i)) {
          count++;
        }
      }
      setTimeout(calculatePrime, 0);
    } else {
      const end = performance.now();
      console.log(
        `Execution time of calculating prime numbers 100 times was ${
          end - start
        } milliseconds.`
      );
    }
  }

  calculatePrime();
}

// Reuse countPrimeNumbers function and execute it 100 times with delayed calculation
countPrimeNumbers();
