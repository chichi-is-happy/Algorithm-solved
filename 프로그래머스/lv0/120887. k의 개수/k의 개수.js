const solution = (i, j, k) => {
  let count = 0;
  for (let n = i; n <= j; n ++) {
    let result = String(n).split('')
    count += result.filter((el) => el === String(k)).length

  }
  return count;
}