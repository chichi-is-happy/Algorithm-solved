function solution(numbers) {
    return (numbers.reduce((pre, value) => pre + value)) / numbers.length
}
