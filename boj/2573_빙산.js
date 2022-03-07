const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let [n, m] = input[0].trim().split(' ').map(Number);

// 전체 지도
let map = Array(n);
for (let i = 0; i < n; i++) {
	map[i] = Array(m).fill(0);
}

// check 배열
let checkHeight = Array(n);
for (let i = 0; i < n; i++) {
	checkHeight[i] = Array(m).fill(0);
}

// 빙산의 위치 저장
let queue = [];

for (let i = 0; i < n; i++) {
	let temp = input
		.slice(i + 1, i + 2)[0]
		.split(' ')
		.map(Number);
	// map[i] = temp
	for (let j = 0; j < temp.length; j++) {
		map[i][j] = temp[j];
		checkHeight[i][j] = temp[j];
		if (temp[j] > 0) queue.push([i, j]);
	}
}

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

function solution() {
	let year = 0;
	let cnt = 0;
	while (cnt < 2) {
		// queue에 빙산의 좌표를 저장
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let [x, y] = queue.shift();
			checkHeight[x][y] -= checkSea(x, y);
			if (checkHeight[x][y] < 0) checkHeight[x][y] = 0;
			if (checkHeight[x][y] !== 0) queue.push([x, y]);
		}

		if (checkZero()) {
			year = 0;
			break;
		}

		cnt = checkIceCnt();
		copyHeight();

		year += 1;
	}
	return year;
}

function checkBorder(i, j) {
	if (i >= 0 && i < n && j >= 0 && j < m) return true;
	else return false;
}

function checkSea(i, j) {
	let cnt = 0;
	for (let k = 0; k < 4; k++) {
		let xx = i + dx[k];
		let yy = j + dy[k];
		if (checkBorder(xx, yy) && map[xx][yy] === 0) {
			cnt += 1;
		}
	}
	return cnt;
}

function copyHeight() {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			map[i][j] = checkHeight[i][j];
		}
	}
}

function checkIceCnt() {
	let temp = Array(n);
	for (let i = 0; i < n; i++) temp[i] = Array(m).fill(0);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			temp[i][j] = checkHeight[i][j];
		}
	}

	// 덩어리 개수
	let cnt = 0;
	for (let i = 0; i < queue.length; i++) {
		let [x, y] = queue[i];
		if (temp[x][y] > 0) {
			temp[x][y] = 0;
			DFS(x, y);
			cnt += 1;
		}
	}

	return cnt;

	function DFS(x, y) {
		for (let k = 0; k < 4; k++) {
			let xx = x + dx[k];
			let yy = y + dy[k];
			if (checkBorder(xx, yy) && temp[xx][yy] > 0) {
				temp[xx][yy] = 0;
				DFS(xx, yy);
			}
		}
	}
}

function checkZero() {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (checkHeight[i][j] !== 0) {
				return false;
			}
		}
	}
	return true;
}

console.log(solution());
