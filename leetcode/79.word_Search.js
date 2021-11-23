function sol(board, word) {
	function DFS(x, y, L) {
		if (answer) return;

		if (L === word.length) {
			console.log(temp);
			answer = true;
		} else {
			for (let i = 0; i < 4; i++) {
				let xx = x + dx[i];
				let yy = y + dy[i];
				if (
					xx >= 0 &&
					xx < board.length &&
					yy >= 0 &&
					yy < board[0].length &&
					check[xx][yy] === 0 &&
					board[xx][yy] === word[L]
				) {
					check[xx][yy] = 1;
					temp.push(board[xx][yy]);
					console.log(xx, yy);
					console.log(temp);
					DFS(xx, yy, L + 1);
					temp.pop();
					check[xx][yy] = 0;
				}
			}
		}
	}

	let answer = false;
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];
	let check = Array(board.length);
	for (let i = 0; i < check.length; i++)
		check[i] = Array(board[0].length).fill(0);

	let temp = [];
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board[i].length; j++) {
			if (answer) return true;
			if (board[i][j] === word[0]) {
				check[i][j] = 1;
				temp.push(board[i][j]);
				DFS(i, j, 1);
				temp.pop();
				check[i][j] = 0;
			}
		}
	}
	return answer;
}
console.log(
	sol(
		[
			['A', 'B', 'C', 'E'],
			['S', 'F', 'C', 'S'],
			['A', 'D', 'E', 'E'],
		],
		'ABCB'
	)
);
console.log(
	sol(
		[
			['C', 'A', 'A'],
			['A', 'A', 'A'],
			['B', 'C', 'D'],
		],
		'AAB'
	)
);
