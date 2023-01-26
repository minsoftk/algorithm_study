const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const [n, m] = input;
  const nCnt = getCnt(n);
  const mCnt = getCnt(m);
  const n_mCnt = getCnt(n - m);
  return Math.min(
    ...[nCnt[0] - mCnt[0] - n_mCnt[0], nCnt[1] - mCnt[1] - n_mCnt[1]]
  );
}

function getCnt(n) {
  let two = 0;
  let five = 0;
  for (let i = 2; i <= n; i *= 2) {
    two += parseInt(n / i);
  }

  for (let i = 5; i <= n; i *= 5) {
    five += parseInt(n / i);
  }
  return [two, five];
}

console.log(solution(input));
