const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [info, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [n, m] = info.split(' ').map(Number);
const arr = input.map((elem) => elem.split(' ').map(Number));

function solution() {
  const graph = Array.from({ length: n + 1 }, () => Array());
  const check = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));

  arr.forEach((elem) => {
    const [a, b] = elem;
    if (check[a][b] === 0) graph[a].push(b);
    if (check[b][a] === 0) graph[b].push(a);
    check[b][a] = 1;
    check[a][b] = 1;
  });
  const res = Array(n + 1).fill(0);

  for (let start = 1; start <= n; start += 1) {
    for (let end = 1; end <= n; end += 1) {
      if (start === end) continue;
      res[start] += bfs(graph, start, end);
    }
  }

  const minValue = Math.min(...res.slice(1, res.length));
  return res.findIndex((elem) => elem === minValue);
}

function bfs(graph, start, end) {
  let check = Array(n + 1).fill(0);
  let queue = [start];
  let level = 0;
  while (queue) {
    const len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const front = queue.shift();
      if (front === end) return level;
      if (check[front] === 0) {
        check[front] = 1;
        queue.push(...graph[front]);
      }
    }
    level += 1;
  }
}

console.log(solution());
