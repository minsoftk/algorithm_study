function solution(n, m) {
	let answer = [];
	let tmp = [];
	function DFS(L, cnt) {
		if (L === m) {
			answer.push(tmp.slice());
		} else {
			for (let i = cnt; i <= n; i++) {
				tmp.push(i);
				DFS(L + 1, i + 1);
				tmp.pop();
			}
		}
	}
	DFS(0, 1);
	return answer;
}

console.log(solution(4, 2)); //[[1, 2], [1, 3], [1, 4], [2, 3], [2, 4], [3, 4]]
