function solution(hp) {
  const number1 = Math.floor(hp / 5); // 장군개미 수
  hp %= 5;
  const number2 = Math.floor(hp / 3); // 병정개미 수
  hp %= 3;
  const number3 = hp; // 일개미 수
  
  return number1 + number2 + number3;
}