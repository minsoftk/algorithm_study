const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')[0];

let queue = [];
let visit = Array(100001).fill(0);

function solution(input) {
  const [n, k] = input.split(' ').map(Number);
  queue.push(n);
  visit[n] = 1;
  return BFS(k);
}

function BFS(k) {
  let level = 0;
  while (queue) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      // console.log(queue, level);
      let n = queue.shift();

      if (n === k) return level;
      if (checkBorder(n + 1) && visit[n + 1] === 0) {
        queue.push(n + 1);
        visit[n + 1] = 1;
      }
      if (checkBorder(n - 1) && visit[n - 1] === 0) {
        queue.push(n - 1);
        visit[n - 1] = 1;
      }
      if (checkBorder(n + 1) && visit[n * 2] === 0) {
        queue.push(n * 2);
        visit[n * 2] = 1;
      }
    }
    level += 1;
  }
}

function checkBorder(n) {
  if (n >= 0 && n <= 100000) return true;
  return false;
}

console.log(solution(input));
