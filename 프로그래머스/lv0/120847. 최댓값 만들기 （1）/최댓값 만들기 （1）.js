const solution = (numbers) => {
    let arr = numbers.sort((a, b) => a - b)
    console.log(arr)
    let result = arr[arr.length-1] * arr[arr.length-2]
    return result;
}