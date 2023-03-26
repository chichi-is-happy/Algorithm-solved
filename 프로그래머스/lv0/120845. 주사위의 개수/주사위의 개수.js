const solution = (box, n) => {
  console.log(box)
  let result = box.map((el) => Math.floor(el / n))
  console.log(result)
  return result.reduce((acc, cur) => acc * cur)
}