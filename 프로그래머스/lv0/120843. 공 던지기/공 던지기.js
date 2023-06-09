const solution = (numbers, k) => {
  let count = 1
  for (let i = 1; i < k; i++) {
    count += 2
  }
while (count > numbers.length) {
    count -= numbers.length
  }
	return count;
}