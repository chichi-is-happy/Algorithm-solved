const solution = (my_string) => {
  let number = "";
  let sum = 0;

  for (let i = 0; i < my_string.length; i++) {
    const char = my_string[i];

    if (isNumeric(char)) {
      number += char;
    } else {
      if (number !== "") {
        sum += parseInt(number);
        number = "";
      }
    }
  }

  if (number !== "") {
    sum += parseInt(number);
  }

  return sum;
}

const isNumeric = (char) => {
  return !isNaN(char);
}
