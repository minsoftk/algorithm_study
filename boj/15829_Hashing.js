const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const inputs = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(inputs) {
  const arr = inputs[1].split('');

  return arr
    .map((elem, idx) => (elem.charCodeAt() - 96) * getNum(idx))
    .reduce((prev, cur) => (prev + cur) % 1234567891, 0);
}

function getNum(idx) {
  if (idx === 0) return 1;
  return (31 * getNum(idx - 1)) % 1234567891;
}

console.log(solution(inputs));
