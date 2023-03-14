const solution = (n) => {
  let str = String(n);
  let result = 0;
  for (let i = 0; i < str.length; i++) {
    result = Number(result) + Number(str[i])
  }
  return result;
}