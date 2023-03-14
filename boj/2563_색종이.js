const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...a] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const input = a.map((elem) => elem.split(' ').map(Number));

function solution(input) {
  let max = -1;
  input.map((elem) => {
    if (elem[0] > max) max = elem[0];
    if (elem[1] > max) max = elem[1];
  });

  const arr = Array.from(Array(100), () => Array(100).fill(0));
  input.forEach((elem) => {
    for (let i = elem[0]; i < elem[0] + 10; i += 1) {
      for (let j = elem[1]; j < elem[1] + 10; j += 1) {
        arr[i][j] = 1;
      }
    }
  });

  let res = 0;
  arr.forEach((row, i) => {
    row.forEach((col, j) => {
      if (arr[i][j] === 1) res += 1;
    });
  });

  return res;
}

console.log(solution(input));
