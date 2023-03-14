const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs').readFileSync(filePath).toString().trim();

function checkHansu(input) {
  let tempInput = input;
  let hansuArray = [];
  while (tempInput > 0) {
    hansuArray.push(tempInput % 10);
    tempInput = Math.floor(tempInput / 10);
  }

  let diff = hansuArray[1] - hansuArray[0];
  for (let i = 0; i < hansuArray.length - 1; i++) {
    if (hansuArray[i + 1] - hansuArray[i] !== diff) return false;
  }
  return true;
}

function solution(input) {
  let cnt = 0;
  for (let i = 1; i <= input; i += 1) {
    if (checkHansu(i)) cnt += 1;
  }

  return cnt;
}

console.log(solution(input));
