const { count, timeStamp } = require('console');
const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [m, n, k] = input[0].trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(input[i].trim().split(' ').map(Number));
}

// console.log(m, n, k, arr);

function solution(m, n, k, arr) {
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	// DFS로는 어떻게 접근을 해야될지 잘 모르겠다.
	function BFS() {
		let cnt = 1;
		while (queue.length) {
			let front = queue.shift();
			for (let i = 0; i < 4; i++) {
				let xx = front[0] + dx[i];
				let yy = front[1] + dy[i];
				if (xx >= 0 && yy >= 0 && xx < n && yy < m && check[xx][yy] === 0) {
					cnt++;
					queue.push([xx, yy]);
					check[xx][yy] = 1;
				}
			}
		}
		return cnt;
	}

	let answer = [];

	let check = Array(n);
	for (let i = 0; i < check.length; i++) check[i] = Array(m).fill(0);

	for (let x of arr) {
		for (let i = x[0]; i < x[2]; i++) {
			for (let j = x[1]; j < x[3]; j++) {
				check[i][j] = 1;
			}
		}
	}
	let queue = [];
	let num = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (check[i][j] === 0) {
				num++;
				check[i][j] = 1;
				queue.push([i, j]);
				answer.push(BFS());
			}
		}
	}
	answer.sort((a, b) => a - b);

	// 입출력이 좀 짜증남
	let temp = '';
	temp += String(num) + '\n';
	for (let x of answer) {
		temp += x + ' ';
	}
	return temp;
}
console.log(solution(m, n, k, arr));
// 3
// 1 7 13
