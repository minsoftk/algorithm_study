// 다이나믹은 복잡한 문제를 직관적으로 알 수 있을 정도로 작게 만들어서 bottom-up으로 해결 한다. (점화식)
function solution(arr, m) {
	let answer = 0;
	let dy = Array(m + 1).fill(0); //i kg을 담았을 때 최대가치, dy[m]이 답이 된다 = 0.

	for (let i = 0; i < arr.length; i++) {
		let ps = arr[i][0];
		let pt = arr[i][1];
		for (let j = m; j >= pt; j--) {
			dy[j] = Math.max(dy[j], dy[j - pt] + ps);
		}
	}
	answer = dy[m];
	return answer;
}

console.log(
	solution(
		[
			[10, 5],
			[25, 12],
			[15, 8],
			[6, 3],
			[7, 4],
		],
		20
	)
); // 41
