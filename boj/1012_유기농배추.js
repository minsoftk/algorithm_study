const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [T, ...inputs] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let idx = 0;
let dx = [0, 1, 0, -1];
let dy = [1, 0, -1, 0];
const input = inputs.map((elem) => elem.split(' ').map(Number));
let answer = [];
function solution() {
  for (let i = 0; i < T; i += 1) {
    const [m, n, k] = input[idx];
    const map = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));

    // 배추밭 정보 입력
    for (let j = idx + 1; j <= idx + k; j += 1) {
      const [y, x] = input[j];
      map[x][y] = 1;
    }

    let cnt = 0;
    for (let i = 0; i < map.length; i += 1) {
      for (let j = 0; j < map[i].length; j += 1) {
        if (map[i][j] === 1) {
          cnt += 1;
          map[i][j] = 0;
          dfs(i, j);
        }
      }
    }

    // dfs
    idx += k + 1;
    answer.push(cnt);

    function dfs(x, y) {
      for (let i = 0; i < 4; i += 1) {
        let xx = x + dx[i];
        let yy = y + dy[i];
        if (checkValid(xx, yy) && map[xx][yy] === 1) {
          map[xx][yy] = 0;
          dfs(xx, yy, cnt);
        }
      }
    }

    function checkValid(x, y) {
      if (x >= 0 && x < n && y >= 0 && y < m) return true;
      else return false;
    }
  }

  return answer.join('\n');
}

console.log(solution());
