const solution = (my_string) => {
  let result = ""
  for (let i = 0; i < my_string.length; i++) {
    if (!isNaN(my_string[i])) {
      result += my_string[i]
    }
  }

  let arr = (result.split(''))
  
  arr.sort(function(a, b) {
    return a-b
  })
  return arr.map((el) => parseInt(el))
}