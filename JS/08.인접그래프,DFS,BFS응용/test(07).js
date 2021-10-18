function solution(board) {
	function check(x, y) {
		let check = Array(board.length).fill(0);
		let set = new Set();
		let xx = parseInt(x / 3) * 3;
		let yy = parseInt(y / 3) * 3;
		for (let i = 0; i < 3; i++) {
			for (let j = 0; j < 3; j++) {
				set.add(board[xx][yy]);
			}
		}
	}
	function BFS() {
		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				check(front[0], front[1]);
			}
		}
	}

	let answer;
	let queue = [];

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			if (board[i][j] === 0) queue.push([i, j]);
		}
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
