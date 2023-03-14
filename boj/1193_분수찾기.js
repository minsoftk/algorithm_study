const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

function solution(input) {
  const num = input[0];
  let cnt = 1;
  let res = 0;
  while (res < num) {
    res += cnt;
    cnt += 1;
  }

  let bunja;
  let bunmo;
  if (cnt % 2 === 0) {
    bunja = 1;
    bunmo = cnt - 1;
    for (let i = 0; i < res - num; i++) {
      bunja += 1;
      bunmo -= 1;
    }
  } else {
    bunja = cnt - 1;
    bunmo = 1;
    for (let i = 0; i < res - num; i++) {
      bunja -= 1;
      bunmo += 1;
    }
  }
  return `${bunja}/${bunmo}`;
}

console.log(solution(input));
