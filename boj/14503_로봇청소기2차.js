const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [n, m] = input[0].trim().split(' ').map(Number);
let robot = input[1].trim().split(' ').map(Number);
let arr = [];
for (let i = 2; i < input.length; i++) {
	arr.push(input[i].trim().split(' ').map(Number));
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < m) return true;
	else return false;
}

// 1. 처음에 로봇이 방문한 곳을 1로 할당해줬는데, 로봇이 방문해도 그대로 0이다.
// 2. back 배열의 x,y []를 써주지 않음
function solution(n, m, robot, arr) {
	// d에 따른 회전 방향
	let turn = [
		[0, -1],
		[-1, 0],
		[0, 1],
		[1, 0],
	];

	let back = [
		[1, 0],
		[0, -1],
		[-1, 0],
		[0, 1],
	];

	// 방문체크 배열
	let check = Array(n);
	for (let i = 0; i < check.length; i++) {
		check[i] = Array(m).fill(0);
	}

	// 0 : 북, 1 : 동, 2: 남, 3: 서
	let d = robot[2];

	//로봇의 현재 위치
	let pos = [robot[0], robot[1]];

	// 벽을 만났을 때 flag
	meetBackSideWall = false;

	let cleanCnt = 0;
	while (!meetBackSideWall) {
		// 현재 위치 청소
		// console.log(pos[0] + 1, pos[1] + 1, d);
		if (check[pos[0]][[pos[1]]] === 0) {
			check[pos[0]][[pos[1]]] = 1;
			cleanCnt += 1;
		}

		// 방향 탐색
		let turnCnt = 0;
		for (let k = 0; k < 4; k++) {
			let xx = pos[0] + turn[d][0];
			let yy = pos[1] + turn[d][1];
			if (checkBorder(xx, yy) && !arr[xx][yy] && !check[xx][yy]) {
				pos = [xx, yy];
				d = d - 1 < 0 ? 3 : d - 1;
				break;
			} else {
				turnCnt += 1;
				d = d - 1 < 0 ? 3 : d - 1;
			}
		}

		// 만약 4번 실행됐을 경우, 뒤로 이동
		if (turnCnt === 4) {
			let xx = pos[0] + back[d][0];
			let yy = pos[1] + back[d][1];

			// 바로 뒤가 벽이라면 중지
			if (checkBorder(xx, yy) && arr[xx][yy] === 1) meetBackSideWall = true;
			else if (checkBorder(xx, yy)) {
				pos = [xx, yy];
			} else {
				meetBackSideWall = true;
			}
		}
	}
	return cleanCnt;
}
console.log(solution(n, m, robot, arr));
