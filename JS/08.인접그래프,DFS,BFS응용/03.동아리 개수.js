function solution(n, edges) {
	let answer = 0;

	// check 배열 생성
	let check = [];

	// 간선의 정보들을 저장할 배열 생성
	let graph = Array(n + 1);
	for (let i = 1; i <= n; i++) {
		graph[i] = Array(n + 1).fill(0);
		check[i] = 0; // check배열 0으로 초기화
	}

	// 무방향 그래프 1 - 2, 2 - 1는 같다.
	for (let [x, y] of edges) {
		graph[x].push(y);
		graph[y].push(x); // 무방향 그래프
	}

	// DFS 구현부
	function DFS(L) {
		// L번의 같은 동아리 친구들인 temp를 탐색
		for (let temp of graph[L]) {
			// temp를 체크하지 않았다면 체크해주고 temp와 연결된 친구들을 탐색한다.
			// 그럼 연결된 모든 친구들을 방문 체크를 해주게 된다.
			// answer++ 한번으로 연결된 모든 동아리 친구들을 체크해주게 된다.
			if (check[temp] === 0) {
				check[temp] = 1;
				DFS(temp);
			}
		}
	}

	// 1번부터 방문. answer + 1을 해주고 연결된 모든 친구들을 탐색한다.
	for (let i = 1; i <= n; i++) {
		if (check[i] === 0) {
			answer++;
			check[i] = 1; // 방문 체크
			DFS(i); // i번째 친구와 연결된 친구들을 탐색.
		}
	}
	return answer;
}

console.log(
	solution(7, [
		[1, 2],
		[2, 3],
		[1, 4],
		[1, 5],
	])
); // 3
