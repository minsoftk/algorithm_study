function solution(board) {
	function DFS(L) {
		if (flag) return;
		if (L === cnt) {
			console.log(cnt);
			// cnt가 되면 도착한 것. L이 25개의 빈공간만큼 되면
			answer = board.map((v) => v.slice());
			flag = true;
		} else {
			let xx = p[0][L];
			let yy = p[1][L];
			let gg = find(xx, yy);
			for (let i = 1; i <= 9; i++) {
				if (h[xx][i] === 0 && y[yy][i] === 0 && g[gg][i] === 0) {
					// 안 쓰였을 경우에 넣는다.
					h[xx][i] = y[yy][i] = g[gg][i] = 1;
					board[xx][yy] = i;
					DFS(L + 1);
					board[xx][yy] = 0; // 굳이 안넣어도 될 것 같긴함. 취소될 경우를 생각해서
					h[xx][i] = y[yy][i] = g[gg][i] = 0; // 취소 ( 백 될 경우를 생각해서 )
				}
			}
		}
	}

	let answer = 0;
	let p = Array(2);
	let h = Array(10);
	let y = Array(10);
	let g = Array(10);
	for (let i = 0; i < p.length; i++) {
		p[i] = Array(81).fill(0);
	}

	for (let i = 0; i < h.length; i++) {
		h[i] = Array(10).fill(0);
		y[i] = Array(10).fill(0);
		g[i] = Array(10).fill(0);
	}

	let cnt = 0;
	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			if (board[i][j] === 0) {
				p[0][cnt] = i;
				p[1][cnt++] = j;
			} else {
				h[i][board[i][j]] = 1;
				y[j][board[i][j]] = 1;
				g[find(i, j)][board[i][j]] = 1;
			}
		}
	}

	let flag = true;
	DFS(0);
	function find(x, y) {
		return parseInt(x / 3) * 3 + parseInt(y / 3);
	}

	return answer;
}

console.log(
	solution([
		[0, 2, 3, 0, 5, 0, 7, 8, 9],
		[0, 5, 6, 0, 8, 9, 1, 0, 3],
		[0, 8, 9, 1, 0, 3, 0, 5, 6],
		[0, 1, 0, 0, 6, 0, 8, 9, 0],
		[3, 0, 5, 0, 9, 7, 0, 1, 4],
		[0, 9, 7, 0, 1, 0, 0, 6, 5],
		[5, 3, 0, 6, 0, 2, 9, 7, 8],
		[6, 0, 2, 9, 0, 8, 5, 3, 1],
		[9, 0, 8, 0, 3, 0, 6, 0, 2],
	])
);

// [
// 	[1, 2, 3, 4, 5, 6, 7, 8, 9],
// 	[4, 5, 6, 7, 8, 9, 1, 2, 3],
// 	[7, 8, 9, 1, 2, 3, 4, 5, 6],
// 	[2, 1, 4, 3, 6, 5, 8, 9, 7],
// 	[3, 6, 5, 8, 9, 7, 2, 1, 4],
// 	[8, 9, 7, 2, 1, 4, 3, 6, 5],
// 	[5, 3, 1, 6, 4, 2, 9, 7, 8],
// 	[6, 4, 2, 9, 7, 8, 5, 3, 1],
// 	[9, 7, 8, 5, 3, 1, 6, 4, 2],
// ];
