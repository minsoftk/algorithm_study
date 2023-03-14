const { start } = require('repl');

const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const [a, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const num = a.split(' ').map(Number);

function solution(input) {
  const [n, m] = num;

  let minCnt = 1e9;

  for (let i = 0; i < n - 7; i += 1) {
    for (let j = 0; j < m - 7; j += 1) {
      const cnt = repaintChessCnt(i, j);
      if (minCnt > cnt) minCnt = cnt;
    }
  }
  return minCnt;

  function repaintChessCnt(x, y) {
    const arr = input.map((elem) => elem.split(''));

    let startColor = arr[x][y];
    let otherColor = arr[x][y] === 'W' ? 'B' : 'W';

    let startColorcnt = 0;
    let otherColorcnt = 0;

    for (let i = x; i < x + 8; i += 1) {
      for (let j = y; j < y + 8; j += 1) {
        if (
          ((i + j) % 2 === 0 && arr[i][j] !== startColor) ||
          ((i + j) % 2 === 1 && arr[i][j] !== otherColor)
        ) {
          startColorcnt += 1;
        }

        if (
          ((i + j) % 2 === 0 && arr[i][j] !== otherColor) ||
          ((i + j) % 2 === 1 && arr[i][j] !== startColor)
        ) {
          otherColorcnt += 1;
        }
      }
    }

    if (startColorcnt > otherColorcnt) return otherColorcnt;
    else return startColorcnt;
  }
}

console.log(solution(input));
