function solution(board) {
	let answer = 10e9;
	let check = Array(7).fill(0);
	for (let i = 0; i < 7; i++) {
		check[i] = Array(7).fill(0);
	}

	// dx, dy 좌표 방향 미리 설정
	let dx = [-1, 0, 1, 0];
	let dy = [-0, 1, 0, -1];

	function BFS(x, y) {
		let queue = [];
		queue.push([0, 0]); // 현수의 위치

		// 첫 좌표부터 시작하므로, 방문 체크를 해준다.
		board[x][y] = 1;
		check[x][y] = 0;

		// Queue가 비지 않았다면, 경로탐색을 계속한다.
		while (queue.length) {
			let front = queue.shift();
			// 미리 설정해놓은 방향으로 경로를 탐색해준다.
			for (let i = 0; i < 4; i++) {
				let xx = front[0] + dx[i];
				let yy = front[1] + dy[i];
				// xx, yy가 (0,0) ~ (6,6) 범위 안에 있어야 한다.
				// 체크 배열에서 방문하지 않은 곳이어야 한다. && board에 0인지 따져야 한다.
				if (
					xx >= 0 &&
					xx < 7 &&
					yy >= 0 &&
					yy < 7 &&
					check[xx][yy] === 0 &&
					board[xx][yy] === 0
				) {
					// 이전 check 배열에 움직인 칸의 수가 입력이 되어 있다. +1 만큼 다시 넣어주고 방문 체크해준다.
					// queue에 xx,yy를 넣어서 (6,6) 까지의 경로를 다시 탐색한다.
					check[xx][yy] = check[front[0]][front[1]] + 1;
					queue.push([xx, yy]);
				}
			}
		}
	}

	// BFS 시작
	BFS(0, 0);
	// 만약 6,6 인덱스 방문을 안했다면 -1을 return 해준다.
	if (check[6][6] === 0) return -1;
	return check[6][6] - 1; // 기존의 0,0의 시작을 1부터 시작해버려서 시작점 카운트를 -1 해준다.
}
console.log(
	solution([
		[0, 0, 0, 0, 0, 0, 0],
		[0, 1, 1, 1, 1, 1, 0],
		[0, 0, 0, 1, 0, 0, 0],
		[1, 1, 0, 1, 0, 1, 1],
		[1, 1, 0, 1, 0, 0, 0],
		[1, 0, 0, 0, 1, 0, 0],
		[1, 0, 1, 0, 0, 0, 0],
	])
); // 12
