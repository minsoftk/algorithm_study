const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const num = input[0];
  if (num === 1) return 1;
  let cnt = 1;
  let store = 1;
  while (6 * cnt + store < num) {
    store += 6 * cnt++;
  }
  return cnt + 1;
}

console.log(solution(input));
