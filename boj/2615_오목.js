const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
input = input.map((elem) => elem.trim().split(' ').map(Number));

let dx = [-1, 0, 1, 1];
let dy = [1, 1, 1, 0];
let answer = [];

function solution() {
	for (let i = 0; i < input.length; i++) {
		for (let j = 0; j < input[i].length; j++) {
			if (input[i][j] > 0) {
				for (let k = 0; k < 4; k++) {
					let xx = i + dx[k];
					let yy = j + dy[k];
					let cnt = 1;

					while (checkBorder(xx, yy) && input[i][j] === input[xx][yy]) {
						cnt += 1;
						xx += dx[k];
						yy += dy[k];
					}

					if (cnt === 5) {
						xx = i - dx[k];
						yy = j - dy[k];
						if (xx < 0 || yy < 0) {
							answer.push(i, j);
						} else if (checkBorder(xx, yy) && input[xx][yy] !== input[i][j]) {
							answer.push(i, j);
						}
					}
				}
			}
		}
	}

	if (answer.length === 0) {
		console.log(0);
		return;
	}
	let [x, y] = answer;
	console.log(input[x][y]);
	console.log(x + 1, y + 1);
}

solution();

function checkBorder(xx, yy) {
	if (xx >= 0 && xx < 19 && yy >= 0 && yy < 19) {
		return true;
	} else return false;
}
