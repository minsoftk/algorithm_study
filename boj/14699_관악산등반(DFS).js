const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].trim().split(' ').map(Number);

let node = Array(5005).fill(0);

const temp = input[1].trim().split(' ').map(Number);

for (let i = 1; i <= n; i++) {
	node[i] = temp[i - 1];
}

const line = input
	.slice(2, 2 + m)
	.map((elem) => elem.trim().split(' ').map(Number));

let graph = Array(m + 1);

for (let i = 1; i <= m; i++) {
	graph[i] = [];
}

// 처음엔 양방향 그래프로 풀었는데
// 높이를 기준으로 단방향 그래프로 만든단
for (let i = 0; i < m; i++) {
	if (node[line[i][0]] < node[line[i][1]]) {
		graph[line[i][0]].push(line[i][1]);
	} else graph[line[i][1]].push(line[i][0]);
}

let dp = Array(5005).fill(0);
function solution() {
	for (let i = 1; i <= n; i++) {
		let placeNum = i;

		// 처음 시작하는 쉼터 +1부터 시작
		DFS(1, placeNum);
	}

	function DFS(L, placeNum) {
		// DFS
		if (dp[placeNum] !== 0) {
			return dp[placeNum];
		}
		if (graph[placeNum].length === 0) {
			dp[placeNum] = 1;
			return dp[placeNum];
		} else {
			// 방문을 안했을 경우 && 높이가 더 높을 때만 방문
			for (let i = 0; i < graph[placeNum].length; i++) {
				let idx = graph[placeNum][i];
				dp[placeNum] = Math.max(dp[placeNum], DFS(L + 1, idx) + 1);
			}
		}
	}
}

solution();
