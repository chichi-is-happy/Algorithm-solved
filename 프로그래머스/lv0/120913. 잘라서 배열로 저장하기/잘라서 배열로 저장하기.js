const solution = (my_str, n) => {
  let arr = [];
  while(my_str.length > 0) {
  	arr.push(my_str.slice(0, n))
  	my_str = my_str.slice(n)
  }
  return arr
}