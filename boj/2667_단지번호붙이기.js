const { count, timeStamp } = require('console');
const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let n = parseInt(input[0].trim());
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(input[i].trim().split('').map(Number));
}

// console.log(m, n, k, arr);
// console.log(n, arr);

function solution(n, arr) {
	function BFS() {
		let cnt = 1;
		while (queue.length) {
			let front = queue.shift();
			for (let i = 0; i < 4; i++) {
				let xx = front[0] + dx[i];
				let yy = front[1] + dy[i];
				if (xx >= 0 && yy >= 0 && xx < n && yy < n && arr[xx][yy] !== 0) {
					cnt++;
					arr[xx][yy] = 0;
					queue.push([xx, yy]);
				}
			}
		}
		return cnt;
	}

	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	let answer = '';
	let temp = [];
	let queue = [];
	let total = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] !== 0) {
				total++;
				arr[i][j] = 0;
				queue.push([i, j]);
				temp.push(BFS());
			}
		}
	}
	temp.sort((a, b) => a - b);
	answer += total + '\n';
	for (let x of temp) answer = answer + String(x) + '\n';
	return answer;
}
console.log(solution(n, arr));
// 3
// 1 7 13
