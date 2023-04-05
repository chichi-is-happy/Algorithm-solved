const solution = (numbers) => {
  console.log(numbers.sort((a, b) => a-b))
  result1 = numbers[0] * numbers[1]
  result2 = numbers[numbers.length-1] * numbers[numbers.length-2]
  if (result1 > result2) return result1
  else return result2
}