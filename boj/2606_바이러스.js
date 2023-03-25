const filePath =
  process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [n, m, ...input] = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [num, connect] = [+n, +m];
  const arr = input.map((elem) => elem.split(' ').map(Number));

  const graph = Array.from({ length: num + 1 }, () => Array());
  arr.forEach((element) => {
    const [a, b] = element;
    if (!graph[a].includes(b)) graph[a].push(b);
    if (!graph[b].includes(a)) graph[b].push(a);
  });

  const res = bfs(graph, 1);
  let cnt = 0;
  for (let i = 2; i < res.length; i += 1) {
    if (res[i] === 1) cnt += 1;
  }
  return cnt;
}

function bfs(graph, start) {
  let check = Array(graph.length).fill(0);
  let queue = [start];
  check[start] = 1;
  while (queue.length) {
    let len = queue.length;
    for (let i = 0; i < len; i += 1) {
      const front = queue.shift();
      for (let node of graph[front]) {
        if (check[node] === 0) {
          queue.push(node);
          check[node] = 1;
        }
      }
    }
  }
  return check;
}

console.log(solution(input));
