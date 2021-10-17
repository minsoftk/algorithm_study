// 최단거리, 최소횟수는 무조건 BFS다.

// Level을
function solution() {
	let answer = '';
	function BFS() {
		let queue = [];
		queue.push(1);
		check[1] = 1;
		while (queue.length) {
			let v = queue.shift();
			answer += v + ' ';
			for (let nv of [v * 2, v * 2 + 1]) {
				if (nv > 7) continue;
				queue.push(nv);
			}
		}
	}
	BFS();
	return answer;
}
console.log(solution());
