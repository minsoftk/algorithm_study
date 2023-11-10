const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = input.slice(1, input.length).map((elem) => elem.split(''));

  let cnt = 0;

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '.') {
        if (!findGuardRow(i, j) && !findGuardCol(i, j)) {
          arr[i][j] = 'X';
          cnt += 1;
        }
      }
    }
  }

  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === '.') {
        if (!findGuardRow(i, j) || !findGuardCol(i, j)) {
          arr[i][j] = 'X';
          cnt += 1;
        }
      }
    }
  }

  return cnt;

  function findGuardRow(i, j) {
    let isGuardHere = false;
    for (let x = 0; x < arr.length; x += 1) {
      if (arr[x][j] === 'X') return true;
    }
    return isGuardHere;
  }
  function findGuardCol(i, j) {
    let isGuardHere = false;
    for (let y = 0; y < arr[i].length; y += 1) {
      if (arr[i][y] === 'X') return true;
    }
    return isGuardHere;
  }
}

console.log(solution(input));
