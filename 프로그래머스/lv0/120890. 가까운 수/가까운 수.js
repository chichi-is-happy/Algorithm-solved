const solution = (array, n) => {
   let closestNumber = null;
  let minDifference = Infinity;

  for (let i = 0; i < array.length; i++) {
    const difference = Math.abs(array[i] - n);
    if (difference < minDifference || difference === minDifference && array[i] < closestNumber) {
      minDifference = difference;
      closestNumber = array[i];
    }
  }
    return closestNumber;

}