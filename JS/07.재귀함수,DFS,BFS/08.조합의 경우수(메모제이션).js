function solution(n, r) {
	let answer = [];
	let store = Array.from(Array(35), () => Array(35).fill(0));
	function DFS(n, r) {
		if (store[n][r] > 0) return store[n][r];
		if (n === r || r === 0) return 1;
		else return (store[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
	}
	answer = DFS(n, r);
	return answer;
}

console.log(solution(30, 20));
