const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [F, S, G, U, D] = input[0].trim().split(' ').map(Number);
function solution(F, S, G, U, D) {
	let answer = -1;
	let queue = [];
	let check = Array(F + 1).fill(0);
	if ((S > G && D === 0) || (G > S && U === 0)) return 'use the stairs';
	if (S === G) return 0;

	check[S] = 1;
	queue.push(S);
	answer = BFS();

	return answer === -1 ? 'use the stairs' : answer;

	function BFS() {
		let level = 0;
		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				let [up, down] = [front + U, front - D];
				if (up === G || down === G) return level + 1;
				if (up < F && up > 0 && check[up] === 0) {
					check[up] = 1;
					queue.push(up);
				}

				if (down > 0 && down < F && check[down] === 0) {
					check[down] = 1;
					queue.push(down);
				}
			}
			level += 1;
		}
		return -1;
	}
}

console.log(solution(F, S, G, U, D));
