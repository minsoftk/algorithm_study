const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const [first, ...last] = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');

const n = Number(first);
let arr = last.map((e) => e.trim().split(' ').map(Number));
let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];

// 1. 상어가 먹을 수 있는 칸을 탐색.
// 2. 상어가 먹을 수 있는 칸의 distance를 구해서 queue에 저장.
// 3. 가장 가까운 칸에 상어를 위치시키고, 위치 조정. 상어가 먹은 cnt + 1
//    만약 상어의 크기만큼 먹었으면 상어의 크기 +1

// 상어와의 최단거리를 구하기 위해 해당 idx까지 BFS로 level 탐색
// 상어의 위치 x,y 에서 i, j에 도달하면

function solution() {
	//가장 처음 아기 상어의 크기는 2
	let babySharkSize = 2;
	let time = 0;

	let stopFlag = false;
	let eatCnt = 0; // 잡아먹은 횟수

	//아기 상어의 위치 찾기
	let [x, y] = babySharkLocation();

	// 모든 배열이 0인지와 탐색이 가능한지, 아니면 loop 종료
	while (!stopFlag && !isZeroArr()) {
		FeedShark();
	}
	return time;

	function FeedShark() {
		// 상어가 먹을 수 있는 칸의 idx를 queue에 저장
		let queue = [];
		for (let i = 0; i < n; i++) {
			for (let j = 0; j < n; j++) {
				// 아기 상어의 크기보다 작고 빈칸이면 안됨
				if (arr[i][j] > 0 && arr[i][j] !== 9 && arr[i][j] < babySharkSize) {
					// i, j 에서의 거리를 BFS로 측정해서 queue에 넣는다.
					let distance = BFS(x, y, i, j);
					if (!distance) continue;
					else queue.push([i, j, distance]);
				}
			}
		}

		// 먹을 수 있는 칸이 여러개일 때, 가장 위쪽 가장 왼쪽을 고르기 위해 sort
		if (queue.length > 1) {
			queue.sort((a, b) => {
				if (a[2] === b[2]) {
					if (a[0] === b[0]) return a[1] - b[1];
					return a[0] - b[0];
				}
				return a[2] - b[2];
			});

			// 만약 queue에 갈 곳이 없다면 종료
		} else if (queue.length === 0) {
			stopFlag = true;
			return;
		}

		// console.log('test', queue);

		// 정렬된 상태
		let [nextX, nextY, distance] = queue.shift();
		arr[nextX][nextY] = 9;
		arr[x][y] = 0;
		x = nextX;
		y = nextY;
		eatCnt += 1;
		time += distance;

		// 상어의 크기만큼 잡아먹었다면 크기를 늘려주고 cnt 초기화
		if (eatCnt === babySharkSize) {
			babySharkSize += 1;
			eatCnt = 0;
		}
	}

	function BFS(x, y, i, j) {
		let check = Array.from({ length: n }, () => Array(n).fill(0));
		let temp = [];
		temp.push([x, y]);

		check[x][y] = 1;
		let level = 0;
		while (temp.length) {
			let len = temp.length;
			// i,j를 쓰다보니 파라미터와 겹쳐서 오류가 발생..
			for (let count = 0; count < len; count++) {
				let front = temp.shift();
				for (let k = 0; k < 4; k++) {
					let xx = front[0] + dx[k];
					let yy = front[1] + dy[k];
					// 먹어야되는 칸이라면 level+1을 return
					// 시작 level에서부터 한번 더 탐색하므로 level+1
					if (xx === i && yy === j) return level + 1;

					// 아기 상어보다 작은 i,j로 BFS 시작전에 조건으로 걸러짐
					if (
						checkBorder(xx, yy) &&
						check[xx][yy] === 0 &&
						arr[xx][yy] <= babySharkSize
					) {
						temp.push([xx, yy]);
						check[xx][yy] = 1;
					}
				}
			}
			level += 1;
		}
		// return level을 해줬었는데, 만약 위에서 return이 안된다면 탐색이 불가능하므로
		// 0을 return 해줘야 한다.
		return 0;
	}
}

function isZeroArr() {
	// 모든 배열이 0일 때, return true
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] === 9) continue;
			if (arr[i][j] !== 0) return false;
		}
	}
	return true;
}

function babySharkLocation() {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			if (arr[i][j] === 9) return [i, j];
		}
	}
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < n && yy >= 0 && yy < n) return true;
	return false;
}
console.log(solution());
