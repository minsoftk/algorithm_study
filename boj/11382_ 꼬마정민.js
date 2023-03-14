const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0]
  .split(' ')
  .map(Number);

function solution(input) {
  return input.reduce((acc, cur) => acc + cur, 0);
}

console.log(solution(input));
