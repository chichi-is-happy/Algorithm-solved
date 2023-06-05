const solution = (n) => {
  const primes = [];
  let num = 2;
  
  while (num <= n) {
    if (n % num === 0) {
      if (!primes.includes(num)) {
      primes.push(num)  
      }
    n /= num 
    } else {
    num++;
    }
  }
  return primes;
}