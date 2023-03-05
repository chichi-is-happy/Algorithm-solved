const solution = (my_string, letter) => {
    let result = "";
  for (let i = 0; i < my_string.length; i++ ) {
    if (my_string[i] === letter) {
      continue;
    }
   result += my_string[i]
  }
  return result;
}