const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const n = 9;
	const map = input.map((el) => el.split(' ').map(Number));
	const pos = [];
	let flag = false;

	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			if (map[i][j] === 0) {
				pos.push([i, j]);
			}
		}
	}

	sudoku(0);

	function sudoku(level) {
		// base case
		if (level === pos.length) {
			console.log(map.map((el) => el.join(' ')).join('\n'));
			process.exit(0);
		}

		const [y, x] = pos[level];

		// recursive
		for (let n = 1; n <= 9; n += 1) {
			if (isPossible(y, x, n)) {
				map[y][x] = n;
				sudoku(level + 1);
				map[y][x] = 0;
			}
		}

		function isPossible(y, x, n) {
			for (let i = 0; i < n; i += 1) {
				if (map[i][x] === n) return false;
			}
			for (let i = 0; i < n; i += 1) {
				if (map[y][i] === n) return false;
			}
			for (let i = 0; i < 3; i += 1) {
				for (let j = 0; j < 3; j += 1) {
					if (map[3 * Math.floor(y / 3) + i][3 * Math.floor(x / 3) + j] === n) {
						return false;
					}
				}
			}
			return true;
		}
	}
}

console.log(solution(input));
