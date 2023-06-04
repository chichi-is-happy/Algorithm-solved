const solution = (s) => {
  const elements = s.split(' ');
  let total = 0; 
  let prevValue = 0; 
    
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    if (element === 'Z') {
      total -= prevValue;
    } else {
      const value = parseInt(element); 
      total += value;
      prevValue = value;
    }
  }

  return total;
}
