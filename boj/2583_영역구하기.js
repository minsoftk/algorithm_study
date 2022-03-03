const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [m, n, k] = input[0].trim().split(' ').map(Number);
let arr = [];
for (let i = 1; i < input.length; i++) {
	arr.push(input[i].trim().split(' ').map(Number));
}

// console.log(m, n, k, arr);

const solution = (m, n, k, arr) => {
	const BFS = () => {
		let cnt = 0;
		while (queue.length) {
			let front = queue.shift();
			for (let i = 0; i < 4; i++) {
				let xx = front[0] + dx[i];
				let yy = front[1] + dy[i];
				if (xx >= 0 && xx < m && yy >= 0 && yy < n && map[xx][yy] === 0) {
					queue.push([xx, yy]);
					map[xx][yy] = 1;
					cnt += 1;
				}
			}
		}
		if (!cnt) return 1;
		return cnt;
	};

	let answer = 0;
	let dy = [-1, 0, 1, 0];
	let dx = [0, 1, 0, -1];
	let map = Array(m);
	for (let i = 0; i < map.length; i++) map[i] = Array(n).fill(0);

	for (let i = 0; i < k; i++) {
		let pos = arr[i];
		// console.log(pos);
		for (let j = pos[1]; j < pos[3]; j++) {
			for (let k = pos[0]; k < pos[2]; k++) {
				map[j][k] = 1;
			}
		}
	}

	let queue = [];
	let count = [];
	for (let i = 0; i < m; i++) {
		for (let j = 0; j < n; j++) {
			if (map[i][j] === 0) {
				queue.push([i, j]);
				count.push(BFS());
				answer += 1;
			}
		}
	}

	count.sort((a, b) => a - b);
	answer += '\n';
	count.forEach((el) => (answer += el + ' '));
	return answer;
};
console.log(solution(m, n, k, arr));
// 3
// 1 7 13
