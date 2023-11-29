const filePath = process.platform === 'linux' ? '/dev/stdin' : '/input.txt';
const input = require('fs')
  .readFileSync(__dirname + filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  let [n, m] = input[0].trim().split(' ').map(Number);
  let graph = Array.from({ length: n + 1 }, () => Array());

  let startWeight = 1e9,
    endWeight = 1;
  for (let i = 1; i <= m; i += 1) {
    const [a, b, bridge] = input[i].split(' ').map(Number);
    graph[a].push([b, bridge]);
    graph[b].push([a, bridge]);
    startWeight = Math.min(startWeight, bridge);
    endWeight = Math.max(endWeight, bridge);
  }
  const [startNode, endNode] = input[m + 1].split(' ').map(Number);

  result = startWeight;
  while (startWeight <= endWeight) {
    const mid = Math.floor((startWeight + endWeight) / 2);
    console.log('bfs(mid):', bfs(mid));
    if (bfs(mid)) {
      result = mid;
      startWeight = mid + 1;
    } else end = mid - 1;
  }

  return result;

  function bfs(inputWeight) {
    const queue = [...graph[startNode]];
    console.log('queue:', queue);
    const check = Array(n + 1).fill(false);
    check[startNode] = true;

    while (queue.length) {
      console.log('check:', check);
      const [idx, weight] = queue.shift();
      console.log('graph[idx]:', idx, graph[idx]);
      for (let [nextIdx, nextWeight] of graph[idx]) {
        if (!check[nextIdx] && nextWeight >= inputWeight) {
          check[nextIdx] = true;
          queue.push([nextIdx, nextWeight]);
        }
      }
    }
    return check[endNode];
  }
}

console.log(solution(input)); // 200
