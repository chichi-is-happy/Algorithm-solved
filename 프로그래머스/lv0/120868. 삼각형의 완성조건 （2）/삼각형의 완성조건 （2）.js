function solution(sides) {
    // sides 에서 가장 큰 수가 max 일 경우 될 수 있는 나머지 한 변 구하기
    // 나머지 한 변이 가장 긴 변인 경우 될 수 있는 한 변 구하기
    
    // 조건 1. 가장 긴 변의 길이는 다른 두 변의 길이의 합보다 작을 것
    // 조건 2. 두 변의 길이의 차이의 절댓값 < 다른 변의 길이 
    
    const result = [];
    const [a, b] = sides;
    const maxLength = Math.max(a, b)

    for (let i = 0; i <= maxLength; i++) {
        if ((maxLength < b + i) && (Math.abs(a-b) < i) && (Math.abs(a-i) < b) && Math.abs(b-i) < a) {
            result.push(i)
        }
    }
    for (let i = 0; i < a + b; i++) {
        if ((Math.abs(a-b) < i) && (Math.abs(a-i) < b) && (Math.abs(b-i) < a)) {
            result.push(i)
        }
    }
    console.log("result: ", result)
    const result1 = [...new Set(result)]
    console.log("result1: ", result1)
    return result1.length
    
}