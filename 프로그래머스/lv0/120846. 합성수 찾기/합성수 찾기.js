const findDivisors = (n) => {
  const divisors = [];
  for (let i = 0; i <= n; i ++) {
    if (n % i === 0) {
      divisors.push(i);
    }
  }
  return divisors;
}
const solution = (n) => {
  let count = 0;
  for (let i = 4; i <= n; i ++) {
    if (findDivisors(i).length >= 3) {
      count++
    }
  }
  return count;
}