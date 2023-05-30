const solution = (emergency) => {
  const array = [];
  const sorted = [...emergency].sort((a, b) => b - a);
  const result = emergency.map(value => sorted.findIndex(e => e === value) + 1);
  return result;
}