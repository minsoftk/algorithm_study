const { emit } = require('process');

const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

function solution(input) {
  let cnt = 1e9;
  let bool = false;
  // 5로 나눠지는 경우
  for (let i = 0; i * 5 <= input; i += 1) {
    const rest = input - i * 5;
    // console.log(i, rest);
    if (rest % 3 !== 0) continue;

    bool = true;
    if (cnt > rest / 3 + i) cnt = rest / 3 + i;
  }
  if (!bool) return -1;
  else return cnt;
}

console.log(solution(input));
