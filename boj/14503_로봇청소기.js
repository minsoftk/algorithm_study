const { count, timeStamp } = require('console');
const fs = require('fs');
const { DefaultSerializer } = require('v8');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input[0].trim().split(' ').map(Number);
let robot = input[1].trim().split(' ').map(Number);
let arr = [];
for (let i = 2; i < input.length; i++) {
	arr.push(input[i].trim().split(' ').map(Number));
}

// console.log(m, n, k, arr);
// console.log(n, arr);
// console.log(n, m, r, c, d, arr);

function solution(n, m, robot, arr) {
	let answer = 1;
	let check = Array(n);
	for (let i = 0; i < check.length; i++) check[i] = Array(m).fill(0);

	// 0 1 2 3 북 동 남 서
	let dir = [
		[0, -1],
		[-1, 0],
		[0, 1],
		[1, 0],
	];
	// 후진
	let back = [
		[1, 0],
		[0, -1],
		[-1, 0],
		[0, 1],
	];
	let queue = [];
	let path = robot[2];
	queue.push([robot[0], robot[1]]);
	check[robot[0]][robot[1]] = 1;
	while (queue.length) {
		let front = queue.shift();
		// 청소할 공간 탐색
		let k = 0;
		let temp = path;
		for (let i = 0; i < 4; i++) {
			// 왼쪽으로 회전 시킨다.
			let xx = front[0] + dir[path][0];
			let yy = front[1] + dir[path][1];
			path = path - 1;
			if (path === -1) path = 3;
			// 만약 청소할 곳이 있다면
			if (
				xx >= 0 &&
				yy >= 0 &&
				xx < n &&
				yy < m &&
				check[xx][yy] === 0 &&
				arr[xx][yy] !== 1
			) {
				queue.push([xx, yy]);
				check[xx][yy] = 1;
				answer++;
				break;
			}
			k++;
		}
		// 만약 방향을 모두 탐색했는데도 청소안한 곳을 못찾았다면
		if (k === 4) {
			let back_x = front[0] + back[temp][0];
			let back_y = front[1] + back[temp][1];
			if (arr[back_x][back_y] === 1) break;
			else {
				check[back_x][back_y] = 1;
				queue.push([back_x, back_y]);
			}
		}
	}
	return answer;
}
console.log(solution(n, m, robot, arr));
// 4
