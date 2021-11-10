function solution(board) {
	// 이 포맷 외우기
	function DFS(x, y) {
		for (let i = 0; i < dx.length; i++) {
			let xx = x + dx[i];
			let yy = y + dy[i];
			if (xx >= 0 && yy >= 0 && xx < len && yy < len && board[xx][yy] === 1) {
				board[xx][yy] = 0;
				DFS(xx, yy);
			}
		}
	}

	let answer = 0;
	let n = board.length;
	let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	let dy = [0, 1, 1, 1, 0, -1, -1, -1];
	let len = board.length;
	for (let i = 0; i < len; i++) {
		for (let j = 0; j < len; j++) {
			if (board[i][j] === 1) {
				board[i][j] = 0;
				answer++;
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
); // 5
