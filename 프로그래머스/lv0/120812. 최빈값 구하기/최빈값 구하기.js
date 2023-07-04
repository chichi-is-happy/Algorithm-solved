function solution(array) {
  const freqMap = {};
  let maxFreq = 0;

  for (const num of array) {
    if (freqMap[num] === undefined) {
      freqMap[num] = 1;
    } else {
      freqMap[num]++;
    }

    if (freqMap[num] > maxFreq) {
      maxFreq = freqMap[num];
    }
  }

  const modes = [];

  for (const num in freqMap) {
    if (freqMap[num] === maxFreq) {
      modes.push(parseInt(num));
    }
  }

  if (modes.length > 1) {
    return -1;
  } else {
    return modes[0];
  }
}
