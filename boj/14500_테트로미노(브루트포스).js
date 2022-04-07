const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

// console.log('here input', input);

const [n, m] = first.trim().split(' ').map(Number);
const arr = last.map((e) => e.trim().split(' ').map(Number));

// 모양의 특수성에 따라 고려해야 되는 모양이 있다.
// map 의 모양에 따라 ㅓ 가 고려 안되는 곳이 발생
// 맨 오른쪽
const t1 = [
	[0, 0],
	[1, 0],
	[2, 0],
	[3, 0],
];
const t2 = [
	[0, 0],
	[1, 0],
	[1, 1],
	[2, 1],
];

const t3 = [
	[0, 0],
	[0, 1],
	[1, 0],
	[1, 1],
];

const t4 = [
	[0, 0],
	[1, 0],
	[2, 0],
	[2, 1],
];

// ㅗ
const t5 = [
	[0, 0],
	[1, 0],
	[1, 1],
	[2, 0],
];

// ㄱ 모양 특수성 ㄴ 모양 고려
const t6 = [
	[0, 0],
	[0, 1],
	[1, 1],
	[2, 1],
];

// ㅗ  ㅓ 로 시작하는 경우
const t7 = [
	[0, 0],
	[0, 1],
	[1, 1],
	[-1, 1],
];

const tech = [t1, t2, t3, t4, t5, t6, t7];

let answer = -1e9;
function solution(n, m, arr) {
	for (let x = 0; x < n; x += 1) {
		for (let y = 0; y < m; y += 1) {
			for (let i = 0; i < tech.length; i++) {
				let sum = 0;
				let axios_sum = 0;
				// 기본
				// console.log(tech[i]);
				for (let j = 0; j < tech[i].length; j++) {
					let xx = x + tech[i][j][0];
					let yy = y + tech[i][j][1];

					if (checkBorder(xx, yy)) {
						sum += arr[xx][yy];
					} else {
						sum = 0;
						break;
					}
				}
				answer = Math.max(sum, answer);

				// 기본 대칭
				for (let j = 0; j < tech[i].length; j++) {
					let xx = x + tech[i][j][0];
					let yyy = y - tech[i][j][1];

					if (checkBorder(xx, yyy)) {
						axios_sum += arr[xx][yyy];
					} else {
						axios_sum = 0;
						break;
					}
				}

				answer = Math.max(axios_sum, answer);
				axios_sum = 0;
				sum = 0;

				// 회전
				// x가 늘어나야 되는 값을 y에 더한다.
				for (let j = 0; j < tech[i].length; j++) {
					let xx = x + tech[i][j][1];
					let yy = y + tech[i][j][0];
					if (checkBorder(xx, yy)) {
						sum += arr[xx][yy];
					} else {
						sum = 0;
						break;
					}
				}

				answer = Math.max(sum, answer);

				// 회전 대칭
				// x가 늘어나야 되는 값을 y에 더한다.
				for (let j = 0; j < tech[i].length; j++) {
					let xx = x + tech[i][j][1];
					let yyy = y - tech[i][j][0];
					if (checkBorder(xx, yyy)) {
						axios_sum += arr[xx][yyy];
					} else {
						axios_sum = 0;
						break;
					}
				}
				answer = Math.max(axios_sum, answer);
				// 기본대칭
			}
		}
	}
	return answer;
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < m) return true;
	else false;
}

console.log(solution(n, m, arr));
