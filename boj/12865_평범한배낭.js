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
			if (w <= y) {
				dp[x][y] = Math.max(dp[x - 1][y], dp[x - 1][y - w] + v);
			} else dp[x][y] = dp[x - 1][y];
			max = Math.max(max, dp[x][y]);
		}
		cnt += 1;
	}

	console.log(max);
}

solution();

// 6kg의 가치 13
// dp[6] = Math.max(dp[6], dp[k - arr[i][0]] + 13)
// dp[7] = Math.max(dp[6], dp[1] + 13)
// dp[6] = 13
// dp[7] = 13

// 4kg의 가치 8
// dp[4] = Math.max(dp[4], dp[k - arr[i][0]] + 8)
// dp[5] = Math.max(dp[5], dp[1] + 8)
// dp[6] = Math.max(dp[6], dp[2] + 8)
// dp[7] = Math.max(dp[7], dp[3] + 8)

// 3kg의 가치 6
// dp[3] = Math.max(dp[3], dp[k - arr[i][0]] + 8)
// dp[4] = Math.max(dp[4], dp[1] + 6)
// dp[5] = Math.max(dp[5], dp[2] + 6)
// dp[6] = Math.max(dp[6], dp[3] + 6)
// dp[7] = Math.max(dp[7], dp[4] + 6)

/// ....
