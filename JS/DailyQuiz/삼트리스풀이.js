blocks = [
	[
		[0, 0],
		[-1, 0],
		[-2, 0],
	],
	[
		[0, 0],
		[0, 1],
		[0, 2],
	],
	[
		[0, 0],
		[-1, 0],
		[0, 1],
	],
	[
		[0, 0],
		[0, 1],
		[-1, 1],
	],
	[
		[-1, 0],
		[-1, 1],
		[0, 1],
	],
	[
		[0, 0],
		[-1, 0],
		[-1, 1],
	],
];

function solution(block, board) {
	n = board.length;
	let answer = 0;
	for (let j = 0; j < n; j++) {
		let lastI = 0;
		for (let i = 0; i < n; i++) {
			let isCross = false;
			for (let k = 0; k < 3; k++) {
				let x = i + blocks[block][k][0];
				let y = j + blocks[block][k][1];
				if (x < 0) continue;
				if (board[x][y] === 1) {
					isCross = true;
					break;
				}
			}
			if (isCross) break;
			else lastI = i;
		}
		let baseI = lastI;
		let baseJ = j;
		let isValid = true;
		let tmp = Array.from(Array(n), () => Array(n).fill(0));
		for (let i = 0; i < n; i++)
			for (let j = 0; j < n; j++) {
				tmp[i][j] = board[i][j];
			}
		for (let k = 0; k < 3; k++) {
			let x = baseI + blocks[block][k][0];
			let y = baseJ + blocks[block][k][1];
			if (x < 0 || x >= n || y < 0 || y >= n) {
				isValid = false;
				break;
			}
			tmp[x][y] = 1;
		}
		if (isValid) {
			let nowCnt = 0;
			for (let i = 0; i < n; i++) {
				let isLineFull = true;
				for (let j = 0; j < n; j++) {
					if (tmp[i][j] === 0) {
						isLineFull = false;
						break;
					}
				}
				if (isLineFull) nowCnt++;
			}
			answer = Math.max(answer, nowCnt);
		}
	}
	return answer;
}
board = [
	[1, 0, 0, 0, 1],
	[1, 1, 0, 1, 1],
	[1, 0, 0, 1, 1],
	[1, 0, 1, 1, 1],
	[1, 0, 1, 1, 1],
];
console.log(solution(0, board));
