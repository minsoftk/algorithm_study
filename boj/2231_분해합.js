const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const num = +input;

  let temp = 1;
  let answer = [];
  for (let i = 0; i < num; i += 1) {
    if (BunhaeHap(i) === num) {
      answer.push(i);
    }
  }
  answer.sort((a, b) => a - b);
  if (answer[0]) return answer[0];
  else return 0;
}

function BunhaeHap(num) {
  let total = num;
  while (num >= 1) {
    total += num % 10;
    num = Math.floor(num / 10);
  }
  return total;
}

console.log(solution(input));
