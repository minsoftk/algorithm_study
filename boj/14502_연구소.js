const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = fs
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const [n, m] = first.trim().split(' ').map(Number);
const map = last.map((e) => e.trim().split(' ').map(Number));

let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// xx, yy 영역 체크
function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < m) return true;
	else return false;
}

// 안전 영역으로 들어갈 수 있는 i,j
function getSafeSection(safeSection) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (map[i][j] === 0) {
				safeSection.push([i, j]);
			}
		}
	}
}

// 바이러스가 전파된 map return
function afterVirus(temp_map) {
	let virus = temp_map.map((e) => e.slice());
	let queue = [];
	let check = Array(n);
	for (let i = 0; i < n; i++) check[i] = Array(m).fill(0);

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (virus[i][j] === 2) {
				check[i][j] = 1;
				queue.push([i, j]);
			}
		}
	}

	// BFS 체크 배열, 중복 방지를 하지 않아서 많은 연산이 일어났다.

	while (queue.length) {
		let len = queue.length;
		for (let i = 0; i < len; i++) {
			let [x, y] = queue.shift();
			virus[x][y] = 2;
			for (let k = 0; k < 4; k++) {
				let xx = x + dx[k];
				let yy = y + dy[k];
				if (checkBorder(xx, yy) && virus[xx][yy] === 0 && check[xx][yy] === 0) {
					check[xx][yy] = 1;
					queue.push([xx, yy]);
				}
			}
		}
	}
	return virus;
}

// 안전영역의 개수를 return
function checkVirus(temp) {
	let cnt = 0;
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < m; j++) {
			if (temp[i][j] === 0) cnt += 1;
		}
	}
	return cnt;
}

function solution(n, m, map) {
	let safeSection = [];
	let max_safeSection = 0;
	getSafeSection(safeSection);

	// 안전영역 check 배열
	let check_safeSection = Array(safeSection.length).fill(0);

	DFS(0, 0);
	return max_safeSection;

	function DFS(L, idx) {
		if (L === 3) {
			// 바이러스가 퍼진 map 2차원 배열 return
			let temp_map = afterVirus(map);

			// 기존의 값보다 안전영역 크기가 크면 저장
			max_safeSection = Math.max(max_safeSection, checkVirus(temp_map));
		} else {
			for (let i = idx; i < safeSection.length; i++) {
				// 방문하지 않은 영역일 경우
				if (!check_safeSection[i]) {
					// 방문 체크 && map에 벽 세워주기
					check_safeSection[i] = 1;
					let [x, y] = safeSection[i];
					map[x][y] = 1;
					DFS(L + 1, idx + 1);
					// DFS 탐색이 끝나면 방문체크 해제, map에 벽 지워주기
					check_safeSection[i] = 0;
					map[x][y] = 0;
				}
			}
		}
	}
}

console.log(solution(n, m, map));
