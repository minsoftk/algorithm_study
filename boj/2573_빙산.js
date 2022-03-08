// 빙산

// 1. 설계
//    처음 접근했을 때,
//    빙산의 위치를 저장하는 배열 : map
//    1년 후의 빙산 높이를 저장하는 배열 : checkHeight

// -> 따로 배열을 만들어 관리하는 이유는 녹기 전의 바다의 개수를 count 해서 높이를 줄여야 하기 때문.

// - 덩어리가 2 이상 나올 때까지 loop 돌린다.

// - checkHeight에 빙산의 높이를 갱신해주고, 모든 배열이 0인지
//   checkZero() 함수로 체크.

// - 이후 덩어리의 개수를 세야 하기 때문에 DFS를 통해 해결하기로 결정.

// 2. 코딩
//    ( 배열로 관리하니 loop안에 2중 for문이 많아져서 시간 초과가 발생)
//    -> 높이를 가진 빙산의 좌표만 queue에 넣어서 관리

// - checkSea() 함수에서 갱신 전의 빙산의 위치를 저장한 map 배열을 통해 바다의 개수를 count, 만약 음수가 된다면 0으로 설정.
//   만약 0이 아니라면 queue에 다시 넣어줌.

// - 모든 배열이 0이 됐는지 확인.

// - 덩어리 개수를 세는 checkIceCnt() 함수로 개수를 return 받는다.
// - temp 배열을 만들어서 checkHeight의 높이를 저장

// (이 시점에서 map은 높이를 빼주기 전, 그래서 임시 배열을 만들어 덩어리를 check 해주기로 함. map과 checkHeight와 비교해야해 수정이 불가능했음)

// - DFS를 통해 queue의 좌표랑 연결된 모든 좌표를 0으로 만들어줌. 덩어리 cnt를 return

// 3. 실수한 부분

//    입출력 문제...

//    백준의 input 값의 배열을 그대로 넣어줘서 참조값이 전달되어

//    map과 checkHeight가 상태를 공유해버림.

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
