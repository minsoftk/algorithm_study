function solution(n) {
	let answer = '';
	function DFS(v) {
		if (v > 7) return;
		else {
			DFS(v * 2); // 왼쪽 자식 노드
			answer += v + ' ';
			DFS(v * 2 + 1); // 오른쪽 자식 노드
		}
	}
	DFS(n);
	return answer;
}
console.log(solution(1));
