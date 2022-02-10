const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

// console.log(input);
let [n, m] = input[0].trim().split(' ').map(Number);
// console.log(n, m);
let a = input.slice(1, n + 1).map((item) => item.trim().split('').map(Number));
let b = input
	.slice(1 + n, 1 + 2 * n)
	.map((item) => item.trim().split('').map(Number));

function sol(n, m, a, b) {
	let cnt = 0;
	let flag = false;
	if (n < 3 || m < 3) {
		if (isEqual(a, b)) console.log(0);
		else console.log(-1);
		return;
	}
	for (let i = 0; i < n - 2; i++) {
		for (let j = 0; j < m - 2; j++) {
			if (a[i][j] !== b[i][j]) {
				convert(a, i, j);
				cnt += 1;
			}

			if (isEqual(a, b)) {
				flag = true;
				break;
			}
		}
		if (flag) break;
	}
	if (flag) console.log(cnt);
	else console.log(-1);
}

function convert(a, row, col) {
	for (let i = row; i < row + 3; i++) {
		for (let j = col; j < col + 3; j++) {
			a[i][j] = a[i][j] === 1 ? 0 : 1;
		}
	}
}

function isEqual(a, b) {
	let flag = true;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (a[i][j] !== b[i][j]) {
				flag = false;
				return flag;
			}
		}
	}
	return flag;
}

sol(n, m, a, b);
