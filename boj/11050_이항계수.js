const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const [n, m] = input.split(' ').map(Number);

  return bino(n, m);
}

function bino(n, m) {
  if (m === 0 || n === m) return 1;
  return bino(n - 1, m) + bino(n - 1, m - 1);
}

console.log(solution(input));
