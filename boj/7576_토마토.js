const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [info, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
let queue = [];
const [m, n] = info.split(' ').map(Number);
const arr = input.map((elem) => elem.split(' ').map(Number));
const check = Array.from({ length: n }, () => Array(m).fill(0));

function solution(input) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (check[i][j] === 0 && arr[i][j] === 1) {
        queue.push([i, j]);
        check[i][j] = 1;
      }
    }
  }

  if (isRipedAllTomato(arr)) return 0;
  const day = bfs();
  if (isRipedAllTomato(arr)) return day - 1;
  else return -1;
}

function isRipedAllTomato(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = 0; j < arr[i].length; j += 1) {
      if (arr[i][j] === -1) continue;
      if (arr[i][j] === 0) {
        return false;
      }
    }
  }
  return true;
}

function checkBorder(x, y) {
  if (x >= 0 && x < n && y >= 0 && y < m) return true;
  return false;
}

function bfs() {
  let level = 0;
  let idx = 0;
  while (queue.length !== idx) {
    const len = queue.length;
    for (let i = idx; i < len; i += 1) {
      const [x, y] = queue[i];
      for (let i = 0; i < 4; i += 1) {
        let xx = x + dx[i];
        let yy = y + dy[i];
        if (checkBorder(xx, yy) && arr[xx][yy] === 0 && check[xx][yy] === 0) {
          check[xx][yy] = 1;
          arr[xx][yy] = 1;
          queue.push([xx, yy]);
        }
      }
    }
    // console.log(queue, level);
    idx = len;
    level += 1;
  }
  return level;
}

console.log(solution(input));
