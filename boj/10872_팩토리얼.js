const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function solution(input) {
  function repeat(n) {
    if (n <= 1) return 1;
    return n * repeat(n - 1);
  }

  const num = Number(input);

  return repeat(num);
}

console.log(solution(input));
