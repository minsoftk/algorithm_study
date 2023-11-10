const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution(input) {
  let birdsNum = +input;
  let time = 0;
  let cnt = 1;
  while (birdsNum > 0) {
    if (birdsNum < cnt) cnt = 1;
    birdsNum -= cnt++;
    time += 1;
  }
  return time;
}

console.log(solution(input));
