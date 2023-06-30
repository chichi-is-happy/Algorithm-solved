const solution = (n) => {
  let count = 0;
  let num = 1;

  while (count < n) {
    if (!isCursedNumber(num)) {
      count++;
    }
    num++;
  }

  return num - 1;
}

const isCursedNumber = (num) => {
  return num % 3 === 0 || num.toString().includes('3');
}
