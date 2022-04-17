let dx = [-1, 0, 1, 0];
let dy = [0, 1, 0, -1];
function solution(places) {
	function BFS(place) {
		if (!place.join('').match(/P/g)) return 1;

		for (let i = 0; i < 5; i++) {
			for (let j = 0; j < 5; j++) {
				if (place[i][j] === 'O') {
					let cnt = 0;
					for (let k = 0; k < 4; k++) {
						// P 의 상하좌우 탐색
						let xx = i + dx[k];
						let yy = j + dy[k];
						if (checkBorder(xx, yy) && place[xx][yy] === 'P') {
							cnt += 1;
						}
					}
					if (cnt > 1) return 0;
				}
				if (place[i][j] === 'P') {
					for (let k = 0; k < 4; k++) {
						// P 의 상하좌우 탐색
						let xx = i + dx[k];
						let yy = j + dy[k];
						if (checkBorder(xx, yy) && place[xx][yy] === 'P') {
							return 0;
						}
					}
				}
			}
		}
		return 1;

		// for (let k = 0; k < 4; k++) {
		// 	// P 의 상하좌우 탐색
		// 	let xx = i + dx[k];
		// 	let yy = j + dy[k];
		// 	// O 인 경우
		// 	if (checkBorder(xx, yy) && place[xx][yy] === 'O') {
		// 		for (let h = 0; h < 4; h++) {
		// 			let xxx = xx + dx[h];
		// 			let yyy = yy + dy[h];
		// 			// 만약 P가 있다면
		// 			if (i === xxx && j === yyy) continue;
		// 			if (checkBorder(xxx, yyy) && place[xxx][yyy] === 'P') {
		// 				console.log(i, j, xx, yy, xxx, yyy);
		// 				return 0;
		// 			}
		// 		}
		// 	} else if (checkBorder(xx, yy) && place[xx][yy] === 'P') {
		// 		return 0;
		// 	}
		// }
		// return 1;
	}

	var answer = [];
	let isValid = 0;

	return places.map((place) => BFS(place));
}

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < 5 && yy >= 0 && yy < 5) return true;
	return false;
}

console.log(
	solution([
		['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
		['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
		['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
		['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
		['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
	])
);
