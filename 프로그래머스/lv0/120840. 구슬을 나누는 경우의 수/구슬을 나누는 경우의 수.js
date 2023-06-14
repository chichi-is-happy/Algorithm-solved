const solution = (balls, share) => {
  if (balls === share) {
    return 1;
  }
  
  let numerator = 1;
  let denominator = 1;
  
  for (let i = 0; i < share; i++) {
    numerator *= (balls - i);
    denominator *= (i + 1);
  }
  
  return Math.round(numerator / denominator);
}