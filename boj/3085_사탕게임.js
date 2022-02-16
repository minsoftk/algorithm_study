const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0]);
// console.log(n);
let arr = input.slice(1, n + 1).map((item) => item.trim().split(''));
// console.log(arr);

let maxCandy = -1e9;

// 스위치 전 행의 최대 개수
for (let i = 0; i < n; i++) {
	let row = new Map();
	for (let j = 0; j < n; j++) {
		row.set(arr[i][j], (row.get(arr[i][j]) || 0) + 1);
	}
	for (let [key, val] of row) {
		maxCandy = Math.max(maxCandy, val);
	}
}

// 스위치 전 열의 최대 개수
for (let i = 0; i < n; i++) {
	let col = new Map();
	for (let j = 0; j < n; j++) {
		col.set(arr[i][j], (col.get(arr[i][j]) || 0) + 1);
	}
	for (let [key, val] of col) {
		maxCandy = Math.max(maxCandy, val);
	}
}

// 인접한 다른 색 사탕 요소 찾기
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let check = Array(n);
for (let i = 0; i < check.length; i++) {
	check[i] = Array(n).fill(0);
}

let queue = [];
for (let i = 0; i < n; i++) {
	for (let j = 0; j < n; j++) {
		// 인접한 사탕의 색이 다른가?
		for (let k = 0; k < 3; k++) {
			if (i + dx[k] >= 0 && i + dx[k] < n && j + dy[k] >= 0 && j + dy[k] < n) {
				let xx = i + dx[k];
				let yy = j + dy[k];
				if (arr[xx][yy] !== arr[i][j]) {
					// console.log(arr[xx][yy], arr[i][j]);
					// console.log([i, j, xx, yy]);
					queue.push([i, j, xx, yy]);
					check[i][j] = 1;
				}
			}
		}
	}
}
console.log(queue);
