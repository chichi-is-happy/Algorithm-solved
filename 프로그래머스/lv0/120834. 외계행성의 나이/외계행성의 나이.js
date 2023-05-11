const solution = (age) => {
  let ageStr = String(age) 
  let alphabet = "abcdefghij"; 
  let result = "";
  for (let i = 0; i < ageStr.length; i ++) {
    result += alphabet[ageStr[i]]
  }
  return result;
}