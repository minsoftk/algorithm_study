const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, m] = a.split(' ').map(Number);
  let hash = new Map();
  for (let i = 0; i < n; i += 1) {
    hash.set(input[i], 1);
  }

  let total = 0;
  for (let i = n; i < n + m; i += 1) {
    total = total + (hash.get(input[i]) || 0);
  }
  return total;
}

console.log(solution(input));
