const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
const input = require('fs')
	.readFileSync(filePath)
	.toString()
	.trim()
	.split('\n');
let map = input.map((e) => e.trim().split(' ').map(Number));

// 0 : 위 를 기준으로 45도 왼쪽으로 회전
let fishTurn = [
	[0, 0],
	[-1, 0],
	[-1, -2],
	[0, -2],
	[1, -2],
	[1, 0],
	[1, 2],
	[0, 2],
	[-1, 2],
];

const test = {
	0: 0,
	1: '위',
	2: '왼쪽 위 대각선',
	3: '왼쪽',
	4: '왼쪽 아래 대각선',
	5: '아래',
	6: '오른쪽 아래 대각선',
	7: '오른쪽',
	8: '오른쪽 위 대각선',
};

function solution() {
	let answer = 0;
	let eatingFishNumber = [map[0][0]];
	let sharkDirection = map[0][1];
	let temp = map[0][0];
	map[0][0] = -1;
	DFS(0, 0, map, temp);
	return answer;

	function DFS(x, y, sharkMap, sum) {
		// 배열에 추가된 상태에서 최대값을 구해야 한다. DFS에서 상어의 위치가 map을 벗어났을 때만 탐색한다.
		// 최대값을 구한 다음에 새로운 map을 만들어주고 물고기를 움직여준다.
		answer = Math.max(
			answer,
			eatingFishNumber.reduce((prev, cur) => prev + cur)
		);
		let tempMap = sharkMap.map((e) => e.slice());
		moveFish(eatingFishNumber, tempMap);

		// let xx = x + fishTurn[sharkDirection][0];
		// let yy = y + fishTurn[sharkDirection][1];
		// || tempMap[xx][yy] === 0 이라는 조건 때문에, 탐색을 못하는 경우가 발생
		if (!checkBorder(x, y)) {
			return;
		} else {
			// 상어의 위치가 물고기의 위치로 바뀌지 않는다.
			for (let step = 1; step <= 3; step++) {
				//상어가 이동할 위치
				let xx = x + fishTurn[sharkDirection][0] * step;
				let yy = y + fishTurn[sharkDirection][1] * step;
				if (!checkBorder(xx, yy)) break;
				if (tempMap[xx][yy] === 0) continue;
				// console.log('상어가 이동할 위치', tempMap[xx][yy]);
				let temp_shark_direction = sharkDirection;
				let temp_fish = tempMap[xx][yy];
				let temp_fish_direction = tempMap[xx][yy + 1];

				// 상어와의 위치 swap
				sharkDirection = temp_fish_direction;
				tempMap[xx][yy] = -1;
				tempMap[x][y] = 0;
				tempMap[x][y + 1] = 0;
				eatingFishNumber.push(temp_fish);

				DFS(xx, yy, tempMap, sum + temp_fish);

				// 상어의 위치 원위치
				tempMap[xx][yy] = temp_fish;
				tempMap[xx][yy + 1] = temp_fish_direction;
				sharkDirection = temp_shark_direction;
				tempMap[x][y] = -1;
				tempMap[x][y + 1] = temp_shark_direction;
				eatingFishNumber.pop();
			}
		}
	}
}

// 다시 짜기
function moveFish(eatingFishNumber, sharkMap) {
	let len = eatingFishNumber.length;
	for (let cnt = 1; cnt <= 16; cnt++) {
		if (!eatingFishNumber.includes(cnt)) {
			let cntFlag = false;
			for (let i = 0; i < 4; i++) {
				for (let j = 0; j < 8; j += 2) {
					if (sharkMap[i][j] === cnt) {
						// 물고기가 가진 방향으로 xx, yy
						let d = sharkMap[i][j + 1];
						let xx = i + fishTurn[d][0];
						let yy = j + fishTurn[d][1];
						console.log(sharkMap);
						// 벽이거나 상어일 경우
						while (!checkBorder(xx, yy) || sharkMap[xx][yy] === -1) {
							d = d + 1 >= 9 ? 1 : d + 1;
							xx = i + fishTurn[d][0];
							yy = j + fishTurn[d][1];
						}

						let temp_fish = sharkMap[i][j];

						sharkMap[i][j] = sharkMap[xx][yy];
						sharkMap[i][j + 1] = sharkMap[xx][yy + 1];

						sharkMap[xx][yy] = temp_fish;
						sharkMap[xx][yy + 1] = d;
						cntFlag = true;
						break;
					}
				}
				if (cntFlag) break;
			}
		}
	}
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < 4 && yy >= 0 && yy < 8) return true;
	return false;
}

console.log(solution());
