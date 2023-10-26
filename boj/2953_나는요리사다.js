const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((elem) => elem.split(' ').map(Number));

function solution(input) {
  let answer = 0;
  let res = Array.from({ length: input.length }, () => 0);

  for (let i = 0; i < input.length; i++) {
    res[i] = input[i].reduce((sum, elem) => sum + elem, 0);
  }

  let maxIdx = 0;
  for (let i = 0; i < res.length; i += 1) {
    if (res[maxIdx] <= res[i]) maxIdx = i;
  }

  return [maxIdx + 1, res[maxIdx]].join(' ');
}

console.log(solution(input));
