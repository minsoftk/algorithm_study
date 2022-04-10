const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, m, k] = first.split(' ').map(Number);
let arr = last.map((e) => e.trim().split(' ').map(Number));
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function solution() {
	let max = -1e9;
	let check = Array.from({ length: n }, () => Array(m).fill(0));
	DFS(0, 0);
	return max;

	function DFS(L, sum) {
		if (L === k) {
			if (max < sum) max = sum;
			return;
		} else {
			for (let i = 0; i < n; i++) {
				for (let j = 0; j < m; j++) {
					if (check[i][j] === 0) {
						checkArr(i, j);
						DFS(L + 1, sum + arr[i][j]);
						unCheckArr(i, j);
					}
				}
			}
		}
	}

	function checkArr(x, y) {
		check[x][y] = 1;
		for (let k = 0; k < 4; k++) {
			let xx = x + dx[k];
			let yy = y + dy[k];
			if (checkBorder(xx, yy)) check[xx][yy] += 1;
		}
	}

	function unCheckArr(x, y) {
		check[x][y] = 0;
		for (let k = 0; k < 4; k++) {
			let xx = x + dx[k];
			let yy = y + dy[k];
			if (checkBorder(xx, yy) && check[xx][yy] > 0) check[xx][yy] -= 1;
		}
	}
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < m) return true;
	return false;
}

console.log(solution());
