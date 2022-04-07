const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const n = +require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n')[0];

let map = Array.from({ length: n }, () => Array(n).fill(0));

function checkQueen(row, col) {
	if (row === 0) return true;

	// 좌상단 대각선
	for (let i = row, j = col; i >= 0 && j >= 0; i -= 1, j -= 1) {
		if (map[i][j] === 1) return false;
	}
	// 우상단 대각선
	for (let i = row, j = col; i >= 0 && j < n; i -= 1, j += 1) {
		if (map[i][j] === 1) return false;
	}

	//행 열 검사
	for (let i = 0; i < n; i++) {
		if (map[row][i] === 1 || map[i][col] === 1) return false;
	}

	return true;
}

function DFS(row) {
	if (row === n) {
		cnt += 1;
		return;
	} else {
		for (let col = 0; col < n; col++) {
			if (checkQueen(row, col)) {
				map[row][col] = 1;
				DFS(row + 1);
				map[row][col] = 0;
			}
		}
	}
}

let cnt = 0;
function solution(n) {
	DFS(0);
	return cnt;
}
console.log(solution(n));
