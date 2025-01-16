const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

function solution() {
	let n = Number(input[0]);
	let arr = input.slice(1, n + 1).map((item) => item.trim().split(''));
	let result = 0;

	for (let i = 0; i < n; i += 1) {
		for (let j = 0; j < n; j += 1) {
			if (j + 1 < n && arr[i][j] !== arr[i][j + 1]) {
				[arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
				result = Math.max(result, countCandy(arr));
				[arr[i][j], arr[i][j + 1]] = [arr[i][j + 1], arr[i][j]];
			}

			if (i + 1 < n && arr[i][j] !== arr[i + 1][j]) {
				[arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]];
				result = Math.max(result, countCandy(arr));
				[arr[i][j], arr[i + 1][j]] = [arr[i + 1][j], arr[i][j]];
			}
		}
	}

	return result;

	function countCandy(map) {
		let result = 0;
		let cnt = 1;
		for (let i = 0; i < n; i += 1) {
			for (let j = 0; j < n; j += 1) {
				cnt = 1;
				// console.log('TEST', map[i][j], '\n');
				for (let k = j + 1; k < n; k += 1) {
					if (map[i][j] === map[i][k]) {
						// console.log('🚀 ~ countCandy ~ map[i][j]:', i, k, map[i][j], map[i][k]);
						cnt += 1;
					} else break;
				}
				result = Math.max(result, cnt);

				cnt = 1;
				for (let k = i + 1; k < n; k += 1) {
					if (map[i][j] === map[k][j]) {
						cnt += 1;
					} else break;
				}
				result = Math.max(result, cnt);
			}
		}

		return result;
	}
}

console.log(solution(input));
