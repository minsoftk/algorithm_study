const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

function solution(input) {
  // 정렬된 배열
  const sortInput = input.sort();
  const avg = sortInput.reduce((prev, cur) => prev + cur, 0) / sortInput.length;
  const middleValue = sortInput[Math.floor(sortInput.length / 2)];
  return [avg, middleValue].join('\n');
}

console.log(solution(input));
