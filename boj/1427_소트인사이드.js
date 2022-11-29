const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();
function solution(input) {
  return input
    .split('')
    .map(Number)
    .sort((a, b) => b - a)
    .join('');
}

console.log(solution(input));
