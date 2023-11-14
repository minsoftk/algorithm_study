const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let [n, m] = input[0].trim().split(' ').map(Number);
  let graph = Array.from({ length: n + 1 }, () => Array());

  let start = 1;
  let end = -1;
  for (let i = 1; i <= m; i += 1) {
    const [a, b, bridge] = input[i].split(' ').map(Number);
    graph[a].push([b, bridge]);
    graph[b].push([a, bridge]);
    if (end < bridge) end = bridge;
  }
  const [a, b] = input[m + 1].split(' ').map(Number);
  console.log(graph);

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
  }

  return 0;
}
console.log(solution(input)); // 200
