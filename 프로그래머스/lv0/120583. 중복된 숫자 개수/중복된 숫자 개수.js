const solution = (array, n) => {
  let result = 0
  array.forEach((el) => {
    if (el === n) {
      result ++
    }
  })
  return result;
}