const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const [r, c] = input[0].split(' ').map(Number);
	const map = input.slice(1).map((i) => i.split(''));

	let dx = [0, 1, 0, -1];
	let dy = [-1, 0, 1, 0];
	let max = 0;

	let set = new Set();
	search(0, 0);

	return max;

	function search(x, y) {
		if (!(0 <= x && x < r && 0 <= y && y < c)) return;
		if (set.has(map[x][y])) {
			return;
		}
		set.add(map[x][y]);
		max = Math.max(max, set.size);
		for (let k = 0; k < 4; k += 1) {
			const nx = x + dx[k];
			const ny = y + dy[k];
			search(nx, ny, set);
		}
		set.delete(map[x][y]);
	}
}

console.log(solution(input));
