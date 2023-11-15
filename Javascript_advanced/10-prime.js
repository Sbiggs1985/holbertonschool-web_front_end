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

function executeMultipleTimes(func, times) {
  const start = performance.now();
  for (let i = 0; i < times; i++) {
    func();
  }
  const end = performance.now();
  console.log(
    `Execution time of calculating prime numbers ${times} times was ${
      end - start
    } milliseconds.`
  );
}

// Reuse countPrimeNumbers function and execute it 100 times
executeMultipleTimes(countPrimeNumbers, 100);
