const solution = (cipher, code) => {
  let result = "";
  let index = code;
   while (index <= cipher.length) {
    result += cipher[index - 1];
    index += code;
  }
  
  return result;
}
