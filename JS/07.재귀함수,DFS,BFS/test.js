function solution(s, e) {
	function BFS() {
		queue.push(s);
		check[s] = 1;
		let level = 0;

		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();

				for (let temp of [front - 1, front + 1, front + 5]) {
					if (temp >= 0 && temp <= 10000 && check[temp] === 0) {
						if (temp === e) return level + 1;
						queue.push(temp);
						check[temp] = 1;
					}
				}
			}
			level++;
		}
	}
	let answer = 0;
	let queue = [];
	let check = Array(10001).fill(0);

	answer = BFS();
	return answer;
}

console.log(solution(5, 14)); //3
console.log(solution(8, 3)); //5
