const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(n) {
  const arr = Array(n).fill(0);
  [arr[1], arr[2]] = [1, 2];

  for (let i = 3; i <= n; i += 1) {
    arr[i] = (arr[i - 1] + arr[i - 2]) % 10007;
  }
  return arr[n] % 10007;
}

console.log(solution(+input)); // 2
