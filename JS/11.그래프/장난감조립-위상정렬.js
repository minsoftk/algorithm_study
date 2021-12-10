function sol(x, y, arr) {
	let indegrees = new Array(n + 1).fill(0);
	let graph = Array(n + 1);
	for (let i = 0; i < graph[i].length; i++) {
		graph[i] = Array();
	}

	for (let [a, b, c] of arr) {
		graph[a].push([b, c]);
	}
	for (let i = 0; i < graph.length; i++) {
		for (let j = 0; j < graph[i].length; j++) {
			if (i <= 4 && j <= 4 && i === j) graph[i][j] = 1;
			else {
			}
		}
	}
}

console.log(
	sol(7, 8, [
		[5, 1, 2],
		[5, 2, 2],
		[7, 5, 2],
		[6, 5, 2],
		[6, 3, 3],
		[6, 4, 4],
		[7, 6, 3],
		[7, 4, 5],
	])
);

//1 16
// 2 16
// 3 9
// 4 17

/**
 * 
 * const inputs = require('fs')
  .readFileSync(process.platform === 'linux' ? 'dev/stdin' : '../text/2637.txt')
  .toString()
  .split('\n');

const n = +inputs[0];
const m = +inputs[1];
const graph = Array.from({ length: n + 1 }, () => Array());
const indegrees = Array(n + 1).fill(0);

for (let i = 2; i < m + 2; i++) {
  const [x, y, k] = inputs[i].split(' ').map(Number);
  graph[y].push([x, k]);
  indegrees[x]++;
}

const queue = [];
const dp = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
for (let i = 1; i <= n; i++) {
  if (indegrees[i] === 0) {
    queue.push(i);
    dp[i][i] = 1;
  }
}

while (queue.length) {
  const from = queue.shift();
  for (const [to, count] of graph[from]) {
    for (let i = 1; i <= n; i++) {
      dp[i][to] += dp[i][from] * count;
    }
    indegrees[to]--;
    if (indegrees[to] === 0) queue.push(to);
  }
}

for (let i = 1; i <= n; i++) {
  if (dp[i][n]) console.log(i, dp[i][n]);
}
 * 
 */
