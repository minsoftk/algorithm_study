const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution(input) {
  const num = +input;
  const arr = Array(num).fill(0);
  [arr[1], arr[2]] = [1, 2];
  for (let i = 3; i <= num; i += 1) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 15746;
  }

  return arr[num];
}

console.log(solution(input));
