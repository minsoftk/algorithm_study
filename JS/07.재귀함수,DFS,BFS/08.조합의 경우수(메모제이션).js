function solution(n, r) {
	let answer = [];
	let store = Array(n + 1);
	for (let i = 1; i <= n; i++) store[i] = Array(n + 1).fill(0);

	// DFS 구현부
	function DFS(n, r) {
		// 만약 조합의 값을 가지고 있다면 0보다 크다. 해당 값을 return해준다.
		if (store[n][r] > 0) return store[n][r];
		// 2C2, 2C0 값은 1으므로 1을 return해준다.
		if (n === r || r === 0) return 1;
		// 그 외의 경우엔 결과값을 store[n][r]에 저장해준다.
		// 그러면 해당 값을 가지고 있을 때, 또 연산을 하지 않고 저장된 값을 return 해준다.
		else return (store[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
	}

	// DFS 시작
	answer = DFS(n, r);
	return answer;
}

console.log(solution(5, 3)); // 10
console.log(solution(33, 19)); // 818809200
