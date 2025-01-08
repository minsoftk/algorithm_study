const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = require('fs').readFileSync(filePath).toString().trim().split('\n');
let n = parseInt(input[0].trim());
let arr = '';
for (let i = 1; i < input.length; i++) {
	arr += input[i].trim().split(' ');
}
arr = arr.split(',').map(Number);
// console.log(m, n, k, arr);
// console.log(n, arr);

// function solution(n, arr) {
// 	let answer = 0;

// 	// dy : i번까지의 연속된 수열의 개수를 저장한다.
// 	let dy = Array(n).fill(0);

// 	// 1번 idx부터 탐색
// 	dy[0] = 1;
// 	for (let i = 1; i < n; i++) {
// 		let max = 0;
// 		// 이전의 dy값중 최대값을 찾는다.
// 		for (let j = i - 1; j >= 0; j--) {
// 			if (arr[j] < arr[i]) max = Math.max(dy[j], max);
// 		}
// 		// 최대값에서 + 1을 해준다.
// 		dy[i] = max + 1;
// 	}
// 	// 최대값을 저장한다.
// 	answer = Math.max(...dy);
// 	return answer;
// }

function solution2(n, arr) {
	let dp = Array(n + 1)
		.fill(0)
		.map(() => -1);

	arr = [0, ...arr];
	dp[1] = 1;

	for (let i = 2; i < n + 1; i += 1) {
		let max = 0;
		for (let j = 1; j < i; j += 1) {
			if (arr[j] < arr[i]) {
				max = Math.max(max, dp[j]);
			}
		}
		dp[i] = max + 1;
	}

	return Math.max(...dp);
}

console.log(solution2(n, arr));
// 4
