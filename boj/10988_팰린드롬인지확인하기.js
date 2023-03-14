const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution() {
  if (input === input.split('').reverse().join('')) return 1;
  else return 0;
}

console.log(solution());
