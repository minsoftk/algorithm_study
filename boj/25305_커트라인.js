const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, k] = input[0].split(' ').map(Number);
  const scores = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  let cutLine = 0;
  let temp_k = k;
  while (temp_k--) {
    cutLine = scores.pop();
  }
  return cutLine;
}

console.log(solution(input));
