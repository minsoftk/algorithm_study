function solution(n, computers) {
	var answer = 0;
	let check = Array(computers.length).fill(0);

	// 0과 연결된 모든 것 check 처리
	function DFS(L) {
		for (let i = 0; i < n; i++) {
			if (computers[L][i] === 1 && i !== L && check[i] === 0) {
				check[i] = 1;
				DFS(i);
			}
		}
	}

	for (let i = 0; i < n; i++) {
		if (check[i] === 0) {
			answer++;
			check[i] = 1;
			DFS(i);
		}
	}
	return answer;
}
console.log(
	solution(3, [
		[1, 1, 0],
		[1, 1, 0],
		[0, 0, 1],
	])
); // 2
