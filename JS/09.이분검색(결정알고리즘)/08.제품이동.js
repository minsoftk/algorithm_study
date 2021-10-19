// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(board) {
	function count(mid) {
		let cnt = 0;
		for (let i = 0; i < board.length; i++) {
			for (let j = 0; j < board.length; j++) {
				if (board[i][j] <= mid) cnt++;
			}
		}
		return cnt;
	}

	let answer;
	let n = board.length;
	let left = 0,
		right = 10e9;
	let time = 1;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (count(mid) > n) {
			answer = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}

	return answer;
}
console.log(
	solution([
		[2, 3, 1, 5, 6],
		[3, 0, 7, 4, 3],
		[8, 5, 7, 5, 6],
		[9, 6, 1, 5, 5],
		[5, 5, 8, 5, 1],
	])
); // 3
