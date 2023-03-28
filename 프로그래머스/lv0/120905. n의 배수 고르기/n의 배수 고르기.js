const solution = (n, numlist) => {
  let result = [];
  numlist.filter(function(el) {
    if (el % n === 0) {
    result.push(el)
  }})
  return result
}
