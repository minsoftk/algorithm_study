// 코드 구현력에 도움이 되는 문제
// 주사위 쌓기
//
function solution(board, nums) {
	let answer = 0;
	let arr = Array(board.length);
	for (let i = 0; i < 2; i++) {
		arr[i] = Array(25).fill(0);
	}

	console.log(arr);
	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			arr;
		}
	}

	return answer;
	// 불러진 숫자 삭제
	// let len = nums.length;
	// while (len--) {
	// 	for (let i = 0; i < board.length; i++) {
	// 		let temp = 0;
	// 		let flag = true;
	// 		for (let j = 0; j < board.length; j++) {
	// 			//nums와 같은걸 찾았을 때, 0으로 만들어주기.
	// 			if (nums[temp] === m[i][j]) {
	// 				m[i][j] = 0;
	// 				temp = j;
	// 			}
	// 		}
	// 		// 삭제후 i, j에 상하좌우, 대각선 flag 확인해주기
	// 		let cnt = 0;
	// 		for (let x = 0; x < m.length; x++) {
	// 			if (m[i][x] === 0) flag = false;
	// 			if (m[x][j])
	// 			if (m[x][temp] !== 0) flag = false;
	// 			if (m[x][x] !== 0) {
	// 				flag = false;
	// 			}
	// 		}
	// 		if (flag)
	// 	}
	// }
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
