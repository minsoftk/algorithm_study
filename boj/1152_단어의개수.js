const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  return input === '' ? 0 : input.split(' ').length;
}

console.log(solution(input));
