const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let blue = 0,
  white = 0;
const num = +n;
const arr = input.map((elem) => elem.split(' ').map(Number));
function solution(input) {
  recursive(0, 0, arr.length);
  return [white, blue].join('\n');
}

function recursive(row, col, arrSize) {
  // console.log(row, col, arrSize);
  // 최소단위인 1까지 나눠졌을 때
  if (arrSize === 1) {
    if (arr[row][col] === 0) {
      // console.log(row, col, 'white');
      white += 1;
    } else {
      // console.log(row, col, 'blue');
      blue += 1;
    }
    return;
  }

  // 만약 색종이가 모두 같은 색이라면,
  if (isAllSameColor(row, col, arrSize)) {
    if (arr[row][col] === 0) white += 1;
    else blue += 1;
    return;
  }

  const mid = Math.floor(arrSize / 2);

  // 1사분면
  recursive(row, col, mid);
  // // 2사분면
  recursive(row, col + mid, mid);
  // // 3사분면
  recursive(row + mid, col, mid);
  // 4사분면
  recursive(row + mid, col + mid, mid);
}

function isAllSameColor(row, col, arrSize) {
  const color = arr[row][col];
  for (let i = row; i < row + arrSize; i += 1) {
    for (let j = col; j < col + arrSize; j += 1) {
      if (color !== arr[i][j]) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(input));
