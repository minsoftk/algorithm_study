const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';

let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
// console.log(n);

let arr = input
	.slice(1, n * n + 1)
	.map((item) => item.trim().split(' ').map(Number));
// console.log(arr);

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// ----------------------------------------------------
function solution() {
	let map = Array(n);
	for (let i = 0; i < map.length; i++) {
		map[i] = Array(n).fill(0);
	}

	let queue = []; // 들어갈 수 있는 좌표를 저장하는 배열
	for (let i = 0; i < arr.length; i++) {
		let student = arr[i][0];
		let studentLike = arr[i].slice(1, arr[i].length);

		// 1단계 좋아하는 학생의 좌표를 return 받아서 저장
		queue = countLike(map, student, studentLike);
		if (queue.length > 1) {
			// 2단계 1단계 이후 비어있는 칸이 가장 많은 좌표를 return 받음.
			queue = emptyCount(map, student, queue);
			if (queue.length > 1) {
				// 3단계 sort된 좌표를 저장
				queue = compareRC(map, student, queue);
			}
		}
		leftOne(map, student, queue);
	}
	console.log(countSatify(map, arr));
}

function leftOne(map, student, queue) {
	let [x, y] = queue.shift();
	// console.log(x, y);
	map[x][y] = student;
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
		return true;
	} else return false;
}

function countLike(map, student, studentLike) {
	let max = 0,
		cnt = 0;
	let temp = Array(n);
	for (let i = 0; i < n; i++) temp[i] = Array(n).fill(0);

	// console.log(studentLike);
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (map[i][j] === 0) {
				cnt = 0;
				for (let k = 0; k < 4; k++) {
					let xx = i + dx[k];
					let yy = j + dy[k];
					if (checkBorder(xx, yy) && studentLike.includes(map[xx][yy])) {
						cnt += 1;
					}
				}
				temp[i][j] = cnt;
				max = Math.max(max, cnt);
			}
		}
	}

	let queue = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (temp[i][j] === max) {
				queue.push([i, j]);
			}
		}
	}
	return queue;
}

function emptyCount(map, student, queue) {
	let max = 0,
		cnt = 0;
	let temp = Array(n);
	for (let i = 0; i < n; i++) temp[i] = Array(n).fill(0);

	let len = queue.length;
	for (let i = 0; i < len; i++) {
		let [x, y] = queue.shift();

		cnt = 0;
		for (let k = 0; k < 4; k++) {
			let xx = x + dx[k];
			let yy = y + dy[k];
			// 비어있는 칸의 cnt를 늘려주지 않으면 2단계에서 정상적으로 거르지 못한다.
			if (map[x][y] === 0) cnt += 1;
			if (map[x][y] === 0 && checkBorder(xx, yy) && map[xx][yy] === 0) {
				cnt += 1;
			}
		}
		temp[x][y] = cnt;
		max = Math.max(max, cnt);
	}

	let new_queue = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (temp[i][j] === max) {
				new_queue.push([i, j]);
			}
		}
	}
	return new_queue;
}

function compareRC(map, student, queue) {
	queue.sort((a, b) => {
		if (a[0] === b[0]) return a[1] - b[1];
		return a[0] - b[0];
	});
	return [queue[0]];
}

function countSatify(map, arr) {
	let sum = 0,
		cnt = 0;
	let student = 0,
		studentLike = [];
	let temp = Array(n);
	for (let i = 0; i < n; i++) temp[i] = Array(n).fill(0);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			for (let k = 0; k < arr.length; k++) {
				if (map[i][j] === arr[k][0]) {
					student = arr[k][0];
					studentLike = arr[k].splice(1, arr[k].length);
				}
			}
			cnt = 0;
			for (let k = 0; k < 4; k++) {
				let xx = i + dx[k];
				let yy = j + dy[k];
				if (checkBorder(xx, yy, n) && studentLike.includes(map[xx][yy])) {
					cnt += 1;
				}
			}
			if (cnt >= 2) sum += Math.pow(10, cnt - 1);
			else sum += cnt;
		}
	}
	return sum;
}

solution();
