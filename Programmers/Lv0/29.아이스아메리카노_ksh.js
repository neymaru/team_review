function solution(money) {
  const answer = [];
  answer.push(Math.floor(money / 5500));
  answer.push(money % 5500);
  return answer;
}

console.log(solution(5500));
console.log(solution(15000));
