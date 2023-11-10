const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [originStr, findStr] = input;

  let cnt = 0;
  for (let i = 0; i < originStr.length; i += 1) {
    let isMatched = true;
    if (originStr[i] === findStr[0]) {
      let j = 0;
      while (j < findStr.length) {
        if (originStr[i + j] !== findStr[j]) {
          isMatched = false;
          break;
        }
        j += 1;
      }
      if (isMatched) {
        cnt += 1;
        i += j - 1;
      }
    }
  }
  return cnt;
}

console.log(solution(input));
