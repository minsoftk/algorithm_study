// 다이나믹은 복잡한 문제를 직관적으로 알 수 있을 정도로 작게 만들어서 bottom-up으로 해결 한다. (점화식)
function solution(arr, m) {
	let answer;
	let dy = Array(m + 1).fill(10000); //i kg을 담았을 때 최대가치, dy[m]이 답이 된다.

	dy[0] = 0;
	for (let i = 1; i < arr.length; i++) {
		for (let j = arr[i]; j <= m; j++) {
			dy[j] = Math.min(dy[j], dy[j - arr[i]] + 1);
		}
	}
	answer = dy[m];
	return answer;
}

console.log(solution([1, 2, 5], 15)); // 3
