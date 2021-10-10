// 코드 구현력에 도움이 되는 문제
// 주사위 쌓기
//
function solution(board, nums) {
	let answer = 0;
	let sum = 0;
	// 빙고를 파악하기 위한 check 변수
	// 대각선, 가로, 세로
	let c1, c2, c3, c4;

	// board 요소를 간단하게 불러오기 위한 배열
	let preview_board = Array(2).fill(0);
	for (let i = 0; i < preview_board.length; i++) {
		preview_board[i] = Array(board.length).fill(0);
	}

	// 임시 board 생성
	let map = Array(board.length);
	for (let i = 0; i < board.length; i++) {
		map[i] = Array(board.length).fill(0);
	}

	// board 요소를 입력
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			let temp = board[i][j];
			preview_board[0][temp] = i;
			preview_board[1][temp] = j;
		}
	}

	// 임시 board에 빙고 시작
	for (let j = 0; j < nums.length; j++) {
		let x = nums[j];
		// 사회자가 불러준 숫자 0으로 변경
		map[preview_board[0][x]][preview_board[1][x]] = 1;

		// 빙고 0으로 초기화
		c1 = c2 = c3 = c4 = 1;

		// 대각선의 경우, preview[0][x] = preview_board[1][x] 같다면 대각선 확인
		if (preview_board[0][x] === preview_board[1][x]) {
			// 대각선의 요소들을 임시 board 변수인 map에서 모두 0인지 확인.
			for (let k = 0; k < map.length; k++) {
				// 모두 0이라면 빙고이므로 c1 = 0
				if (map[k][k] === 0) c1 = 0;
			}
		} else c1 = 0; // ????

		// 오른쪽에서 왼쪽 방향의 대각선 check, c2에 저장
		if (preview_board[0][x] + preview_board[1][x] === board.length - 1) {
			for (let k = 0; k < map.length; k++) {
				if (map[k][map.length - 1 - k] === 0) c2 = 0;
			}
		} else c2 = 0;

		for (let k = 0; k < map.length; k++) {
			if (map[preview_board[0][x]][k] === 0) c3 = 0;
			if (map[k][preview_board[1][x]] === 0) c4 = 0;
		}
		sum += c1 + c2 + c3 + c4;
		console.log('j', j);
		if (sum >= 3) {
			answer = j + 1;
			console.log('j', j);
			break;
		}
	}
	return answer;
}

console.log(
	solution(
		[
			[11, 12, 2, 24, 10],
			[16, 1, 13, 3, 25],
			[6, 20, 5, 21, 17],
			[19, 4, 8, 14, 9],
			[22, 15, 7, 23, 18],
		],
		[5, 10, 7, 16, 2, 4, 22, 8, 17, 13, 3, 18, 1]
	)
);
