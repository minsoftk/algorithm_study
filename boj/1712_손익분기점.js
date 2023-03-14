const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
  const [a, b, c] = input.map(Number);

  if (b >= c) return -1;

  return Math.floor(a / (c - b)) + 1;
}

console.log(solution(input));
