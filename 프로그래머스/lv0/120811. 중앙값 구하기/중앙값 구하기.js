const solution = (array) => {
  // array를 정렬한 뒤 , arr.length / 2 의 반올림한 인덱스의 수를 꺼냄
  // sort로 배열 정렬 
  let sortArr = array.sort((a,b) => a - b)
  // 가운데 인덱스 추출
  let middleIndex = sortArr.length / 2
  // 반올림
  let numRounded = Math.round(middleIndex)
  // 정렬한 배열 인덱스 자리에 있는 수 추출
  return sortArr[numRounded-1]
}