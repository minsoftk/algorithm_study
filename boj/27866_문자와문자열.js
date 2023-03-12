const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [str, idx] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution() {
  return str[+idx - 1];
}

console.log(solution());
