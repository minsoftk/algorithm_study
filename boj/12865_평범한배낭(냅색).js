const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [N, K] = first.trim().split(' ').map(Number);

const arr = last.map((el) => el.trim().split(' ').map(Number));

function solution() {
	let dp = Array(N + 1)
		.fill()
		.map((e) => Array(K + 1).fill(0)); //i kg을 담았을 때 최대가치, dy[m]이 답이 된다.
	let max = 0;

	// x : 물건의 개수 , y : 가방의 최대 무게
	let cnt = 0;
	for (let x = 1; x <= N; x++) {
		const [w, v] = arr[cnt];
		for (let y = 1; y <= K; y++) {
			// 만약 무게가 w 보다 클 경우
			if (w <= y) {
				// 무게가 6일때, 최대 무게는 7이므로 이전 행에서
				// 1의 무게 즉, dp[1]의 최대가치에 6의 value를 더한것과
				// 6의 가치인 13과 비교해 최대값을 저장한다.
				// 그러면 d[6]에는 모든 경우의 수의 최대 가치가 저장.
				dp[x][y] = Math.max(dp[x - 1][y], dp[x - 1][y - w] + v);
			}
			// w보다 작으면 이전 행의 값을 입력해준다.
			else dp[x][y] = dp[x - 1][y];
			max = Math.max(max, dp[x][y]);
		}
		cnt += 1;
	}
	console.log(max);
}
solution();

// 6 13
// 4 8
// 3 6
// 5 12

//단계별 dp
//   1 2 3 4 5 6  7
// 0 0 0 0 0 0 13 13

//   1 2 3 4 5 6  7
// 0 0 0 0 8 8 13 13

// 무게 3이 입력 됐을 때, 7에서 3을 뺀 무게가 가능하므로
//dp[4] -> dp[3] + 6
//dp[5] -> dp[2] + 6
//dp[6] -> dp[3] + 6
//dp[7] -> dp[4] + 6
//   1 2 3 4 5 6  7
// 0 0 0 6 8 8 13 14

//   1 2 3 4 5  6  7
// 0 0 0 6 8 12 13 14
