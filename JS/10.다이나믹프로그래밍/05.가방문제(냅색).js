// 다이나믹은 복잡한 문제를 직관적으로 알 수 있을 정도로 작게 만들어서 bottom-up으로 해결 한다. (점화식)
function solution(arr, m) {
	let answer;
	let dy = Array(m + 1).fill(0); //i kg을 담았을 때 최대가치, dy[m]이 답이 된다.

	for (let i = 0; i < arr.length; i++) {
		for (let j = arr[i][0]; j <= m; j++) {
			dy[j] = Math.max(dy[j], dy[j - arr[i][0]] + arr[i][1]);
		}
	}
	answer = dy[m];
	return answer;
}

console.log(
	solution(
		[
			[5, 12],
			[3, 8],
			[6, 14],
			[4, 7],
		],
		11
	)
); // 28
