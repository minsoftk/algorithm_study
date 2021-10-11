function solution(board) {
	let answer;
	let max = -2147000000;

	// 없앤 블록의 수를 반환하는 함수
	function checkblock(board) {
		let block = 0;
		for (let i = 0; i < board.length; i++) {
			let cnt = 0;
			for (let j = 0; j < board.length; j++) {
				if (board[i][j] === 1) cnt++;
			}
			if (cnt === board.length) block++;
		}
		return block;
	}

	for (let i = 0; i < board.length; i++) {
		for (j = 0; j < board.length; j++) {
			if (board[i][j] === 0) {
				// 0번째 블록의 경우가 들어갈 수 있는지 확인
				if (
					i + 1 < board.length &&
					i + 2 < board.length &&
					board[i + 1][j] === 0 &&
					board[i + 2][j] === 0
				) {
					// 조건에 만족한다면 1값을 넣어주고 없어지는 블록을 check한 다음 0으로 다시 설정.
					board[i][j] = board[i + 1][j] = board[i + 2][j] = 1;
					max = Math.max(checkblock(board), max);
					board[i][j] = board[i + 1][j] = board[i + 2][j] = 0;
				}

				// 1번째 블록의 경우가 들어갈 수 있는지 확인
				if (
					j + 1 < board.length &&
					j + 2 < board.length &&
					board[i][j + 1] === 0 &&
					board[i][j + 2] === 0
				) {
					// 조건에 만족한다면 1값을 넣어주고 없어지는 블록을 check한 다음 0으로 다시 설정.
					board[i][j] = board[i][j + 1] = board[i][j + 2] === 1;
					max = Math.max(checkblock(board), max);
					board[i][j] = board[i][j + 1] = board[i][j + 2] === 0;
				}

				// 2번째 블록의 경우가 들어갈 수 있는지 확인
				if (
					i + 1 < board.length &&
					j + 1 < board.length &&
					board[i + 1][j] === 0 &&
					board[i + 1][j + 1] === 0
				) {
					// 조건에 만족한다면 1값을 넣어주고 없어지는 블록을 check한 다음 0으로 다시 설정.
					board[i][j] = board[i + 1][j] = board[i + 1][j + 1] === 1;
					max = Math.max(checkblock(board), max);
					board[i][j] = board[i + 1][j] = board[i + 1][j + 1] === 0;
				}

				// 3번째 블록의 경우가 들어갈 수 있는지 확인
				if (
					i + 1 < board.length &&
					j + 1 < board.length &&
					board[i][j + 1] === 0 &&
					board[i + 1][j] === 0 &&
					board[i + 1][j + 1] === 0
				) {
					// 조건에 만족한다면 1값을 넣어주고 없어지는 블록을 check한 다음 0으로 다시 설정.
					board[i][j + 1] = board[i + 1][j] = board[i + 1][j + 1] = 1;
					max = Math.max(checkblock(board), max);
					board[i][j + 1] = board[i + 1][j] = board[i + 1][j + 1] = 0;
				}

				// 4번째 블록의 경우가 들어갈 수 있는지 확인
				if (
					i + 1 < board.length &&
					j + 1 < board.length &&
					board[i][j + 1] === 0 &&
					board[i + 1][j + 1] === 0
				) {
					// 조건에 만족한다면 1값을 넣어주고 없어지는 블록을 check한 다음 0으로 다시 설정.
					board[i][j] = board[i][j + 1] = board[i + 1][j + 1] = 1;
					max = Math.max(checkblock(board), max);
					board[i][j] = board[i][j + 1] = board[i + 1][j + 1] = 0;
				}

				// 5번째 블록의 경우가 들어갈 수 있는지 확인
				if (
					i + 1 < board.length &&
					j + 1 < board.length &&
					board[i][j + 1] === 0 &&
					board[i + 1][j] === 0
				) {
					// 조건에 만족한다면 1값을 넣어주고 없어지는 블록을 check한 다음 0으로 다시 설정.
					board[i][j] = board[i][j + 1] = board[i + 1][j] = 1;
					max = Math.max(checkblock(board), max);
					board[i][j] = board[i][j + 1] = board[i + 1][j] = 0;
				}
			}
		}
	}
	answer = max;
	return answer;
}

console.log(
	solution([
		[1, 0, 0, 0],
		[1, 0, 0, 1],
		[1, 0, 0, 1],
		[1, 1, 0, 1],
	])
);
