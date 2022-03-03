const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [F, S, G, U, D] = input[0].trim().split(' ').map(Number);

function solution(F, S, G, U, D) {
	function BFS() {
		let L = 0;
		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				// console.log('front', front);
				let [up, down] = [front + U, front - D];
				if (up === G || down === G) return L + 1;
				if (down >= 1 && down <= F && check[down] === 0) {
					queue.push(down);
					check[down] = 1;
				}
				if (up >= 1 && up <= F && check[up] === 0) {
					queue.push(up);
					check[up] = 1;
				}
			}
			// console.log(queue);
			// console.log('check', check);
			L++;
		}
		return 'use the stairs';
	}

	if ((S > G && D === 0) || (G > S && U === 0)) return 'use the stairs';
	if (S === G) return 0;
	let queue = [];
	let check = Array(F + 1).fill(0);
	check[S] = 1;
	queue.push(S); // 강호의 위치
	return BFS();
}
console.log(solution(F, S, G, U, D));
