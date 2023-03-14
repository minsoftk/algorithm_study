const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const [n, k] = input;
let memo = Array.from({ length: n + 1 }, () => Array(k + 1).fill(0));

function solution(input) {
  return bino(n, k) % 10007;
}

function bino(n, m) {
  if (memo[n][m]) return memo[n][m] % 10007;
  if (m === 0 || n === m) return 1;
  return (memo[n][m] = (bino(n - 1, m) % 10007) + (bino(n - 1, m - 1) % 10007));
}

console.log(solution(input));
