const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = first.trim().split(' ').map(Number);
let arr = last.map((e) => e.trim().split(''));
// arr.forEach((e) => console.log(...e));

function checkColor(x, y, n) {
	let color = arr[x][y];
	for (let i = x; i < x + n; i++) {
		for (let j = y; j < y + n; j++) {
			if (color !== arr[i][j]) return false;
		}
	}
	return true;
}

function quadTree(x, y, n) {
	if (checkColor(x, y, n)) {
		answer += arr[x][y];
		return;
	}

	let mid = n / 2;
	answer += '(';
	quadTree(x, y, mid);
	quadTree(x, y + mid, mid);
	quadTree(x + mid, y, mid);
	quadTree(x + mid, y + mid, mid);
	answer += ')';
}
let answer = '';
function solution() {
	quadTree(0, 0, n);
	console.log(answer);
}
solution();
