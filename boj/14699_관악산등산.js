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

let graph = Array(5005);

for (let i = 1; i <= 5005; i++) {
	graph[i] = new Array();
}

// 처음엔 양방향 그래프로 풀었는데
// 높이를 기준으로 단방향 그래프로 만든단
for (let i = 0; i < m; i++) {
	if (node[line[i][0]] < node[line[i][1]]) {
		graph[line[i][0]].push(line[i][1]);
	} else if (node[line[i][0]] > node[line[i][1]])
		graph[line[i][1]].push(line[i][0]);
}

let dp = Array(5005).fill(-1);

function solution() {
	for (let i = 1; i <= n; i++) {
		// 처음 시작하는 쉼터 +1부터 시작

		DFS(0, i);
	}

	for (let i = 1; i <= n; i++) {
		console.log(dp[i]);
	}

	function DFS(L, placeNum) {
		// DFS
		// 연결된 등반 가능한 쉼터를 nested에 저장
		// console.log('here ', graph[placeNum].length);

		if (graph[placeNum].length === 0) {
			dp[placeNum] = 1;
			return dp[placeNum];
		}
		if (dp[placeNum] !== -1) {
			return dp[placeNum];
		}

		// 방문을 안했을 경우 && 높이가 더 높을 때만 방문
		for (let i = 0; i < graph[placeNum].length; i++) {
			let idx = graph[placeNum][i];
			dp[placeNum] = Math.max(dp[placeNum], DFS(L + 1, idx) + 1);
		}
		return dp[placeNum];
	}
}

solution();
