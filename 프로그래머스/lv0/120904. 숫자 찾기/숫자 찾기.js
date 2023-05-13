const solution = (num, k) => {
  let numString = num.toString();
  if (numString.indexOf(k) !== -1) {
    return numString.indexOf(k) + 1;
  }
  else return -1;
}