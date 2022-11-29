const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  const [n, ...lists] = input;
  const memo = Array(10001).fill(0);

  input.forEach((elem) => {
    memo[elem] += 1;
  });

  const res = [];
  let cnt = 0;
  let idx = 1;
  while (cnt + memo[idx] < n) {
    cnt += memo[idx];
    for (let i = 0; i < memo[idx]; i += 1) res.push(idx);
    idx += 1;
  }

  for (let i = 0; i <= cnt + memo[idx] - n; i += 1) res.push(idx);
  return res.join('\n');
}

console.log(solution(input));
