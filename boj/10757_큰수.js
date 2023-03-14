const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

function solution(input) {
  const [a, b] = input.map(BigInt);
  return (a + b).toString();
}

console.log(solution(input));
