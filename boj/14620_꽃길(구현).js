const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const n = Number(input[0].trim());
let map = input.slice(1, n + 1);
map = map.map((item) => item.trim().split(' ').map(Number));
// console.log('input ', n, map);

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
let check = Array(n);
for (let i = 0; i < n; i++) check[i] = Array(n).fill(0);

function sol() {
	let sum = 0;
	let cnt = 0;
	let queue = [];
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			sum = map[i][j];
			cnt = 0;
			for (let k = 0; k < 4; k++) {
				let xx = i + dx[k];
				let yy = j + dy[k];
				if (checkBorder(xx, yy)) {
					sum += map[xx][yy];
					cnt += 1;
				}
			}

			// 4방향으로 나갈 수 없을 경우
			if (cnt < 4) continue;

			// 4방향으로 나갈 수 있는 i,j 좌표 push
			queue.push([i, j, sum]);
		}
	}

	let temp = [];
	let answer = 1e9;
	let checkQueue = Array(queue.length).fill(0);
	DFS(0, 0);
	console.log(answer);

	function DFS(L, idx) {
		if (L === 3) {
			let sum = 0;
			for (let i = 0; i < temp.length; i++) {
				sum += temp[i][2];
			}
			answer = Math.min(answer, sum);
			return;
		} else {
			for (let i = idx; i < queue.length; i++) {
				let [x, y, total] = queue[i];

				if (checkQueue[i] === 0) {
					if (checkFlower(x, y)) {
						check[x][y] = 1;
						for (let k = 0; k < 4; k++) {
							check[x + dx[k]][y + dy[k]] = 1;
						}
						temp.push(queue[i]);
						checkQueue[i] = 1;

						DFS(L + 1, i + 1);

						check[x][y] = 0;
						for (let k = 0; k < 4; k++) {
							check[x + dx[k]][y + dy[k]] = 0;
						}
						checkQueue[i] = 0;
						temp.pop();
					}
				}
			}
		}
	}
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < n) {
		return true;
	} else return false;
}

function checkFlower(x, y) {
	let cnt = 0;
	for (let i = 0; i < 4; i++) {
		let xx = x + dx[i];
		let yy = y + dy[i];
		if (checkBorder(xx, yy) && check[xx][yy] === 0) {
			cnt += 1;
		}
	}

	if (cnt === 4) return true;
	else return false;
}

// 그리디로는 못푸는듯. DFS 방법을 생각해봐야 하나?
// 첫번째가 최소 값을 가지더라도 다음 요소를 선택하지 못하는 경우가 발생했을 때
// 최소값이 달라지는 듯 하다.

sol();
