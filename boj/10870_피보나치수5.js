const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  const num = Number(input);

  if (num === 0) return 0;
  if (num === 1) return 1;
  return fibo(1, 0, 1);

  function fibo(n, a, b) {
    if (n >= num) return b;
    return fibo(n + 1, b, a + b);
  }
}

console.log(solution(input));
