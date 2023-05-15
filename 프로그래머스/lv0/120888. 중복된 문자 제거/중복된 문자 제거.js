const solution = (my_string) => {
 let result = [];
  my_string.split("").forEach((el) => {
    if (result.includes(el)) {
      return
    }
    else result.push(el)
  })
  return result.join("");
}