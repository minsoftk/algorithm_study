function solution(map) {
	let answer = 0;
	let len = map.length;

	// 대각선까지 섬으로 친다.
	let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	let dy = [0, 1, 1, 1, 0, -1, -1, -1];

	// DFS 구현부
	function DFS(x, y) {
		for (let i = 0; i < 8; i++) {
			let xx = x + dx[i];
			let yy = y + dy[i];
			// xx, yy가 범위 안에 있는지, 입력받은 map의 값이 1인지 확인
			if (xx >= 0 && xx < len && yy >= 0 && yy < len && map[xx][yy] === 1) {
				// 방문 체크를 위해 map에 0값을 입력해준다.
				// 어차피 섬의 개수가 체크 되었고 1인 부분만 체크를 하기 때문에, 0으로만 만들어줘도 무방하다.
				//다음 xx, yy로 DFS
				map[xx][yy] = 0;
				DFS(xx, yy);
			}
		}
	}

	// map을 탐색한다. 1인 값이 섬이므로 1인 index를 탐색한다.
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			// 1을 만나면 섬의 개수를 증가시켜주고, 값을 0으로 바꿔 방문 체크.
			// i, j와 연결된 섬을 모두 0으로 바꿔주기 위해 DFS를 한다.
			if (map[i][j] === 1) {
				answer++;
				map[i][j] = 0;
				DFS(i, j);
			}
		}
	}

	return answer;
}

console.log(
	solution([
		[1, 1, 0, 0, 0, 1, 0],
		[0, 1, 1, 0, 1, 1, 0],
		[0, 1, 0, 0, 0, 0, 0],
		[0, 0, 0, 1, 0, 1, 1],
		[1, 1, 0, 1, 1, 0, 0],
		[1, 0, 0, 0, 1, 0, 0],
		[1, 0, 1, 0, 1, 0, 0],
	])
); // 3
