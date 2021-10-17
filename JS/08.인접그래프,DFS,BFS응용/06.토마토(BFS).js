function solution(board) {
	let answer = 0;
	let len = board.length;

	// 방문 체크 배열 선언
	let check = Array(len);
	for (let i = 0; i < check.length; i++)
		check[i] = Array(board[0].length).fill(0);

	// 방향 설정
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	// BFS 구현부
	let queue = [];
	function BFS() {
		while (queue.length) {
			// queue가 빌 때까지 반복
			let front = queue.shift();
			for (let i = 0; i < 4; i++) {
				let xx = front[0] + dx[i];
				let yy = front[1] + dy[i];
				// 토마토가 xx,yy에서 안익은 토마토가 있을때, 익은 것으로 만들어주고
				// 방문 체크를 해준다. 이전의 체크 횟수에서 +1을 한다.
				// 익은 토마토 기준에서 안익은 토마토를 찾기 위해 다시 queue에 넣어준다.
				if (
					xx >= 0 &&
					xx < board.length &&
					yy >= 0 &&
					yy < board[0].length &&
					board[xx][yy] === 0
				) {
					board[xx][yy] = 1;
					check[xx][yy] = check[front[0]][front[1]] + 1;
					queue.push([xx, yy]);
					answer = check[xx][yy];
				}
			}
		}
	}

	// 가장 먼저 익은 토마토들을 먼저 queue에 넣어준다.
	// 익은 토마토들의 index를 기준으로 생각해야 되기 때문이다.
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 1) {
				queue.push([i, j]);
			}
		}
	}

	// BFS 수행
	BFS();
	// BFS를 수행하고 나서도 안익은 토마토인 0이 발견되면 -1을 return한다.
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[0].length; j++) {
			if (board[i][j] === 0) return -1;
		}
	}

	return answer;
}

console.log(
	solution([
		[0, 0, -1, 0, 0, 0],
		[0, 0, 1, 0, -1, 0],
		[0, 0, -1, 0, 0, 0],
		[0, 0, 0, 0, -1, 1],
	])
); // 4
