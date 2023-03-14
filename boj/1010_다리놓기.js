const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  return input
    .map((elem) => {
      const [m, n] = elem.split(' ').map(Number);

      let check = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
      return bino(n, m, check);
    })
    .join('\n');
}

function bino(n, m, check) {
  if (check[n][m]) return check[n][m];
  if (n === m || m === 0) return 1;
  return (check[n][m] = bino(n - 1, m, check) + bino(n - 1, m - 1, check));
}

console.log(solution(input));
