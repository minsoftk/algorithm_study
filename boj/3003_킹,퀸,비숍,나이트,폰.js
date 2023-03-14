const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(' ');

function solution(inputArr) {
  const validWhitePieceCnt = [1, 1, 2, 2, 2, 8];
  return inputArr.map((elem, idx) => validWhitePieceCnt[idx] - Number(elem));
}

console.log(solution(input).join(' '));
