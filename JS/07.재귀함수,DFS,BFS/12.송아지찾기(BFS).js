function solution(s, e) {
	let answer = 0;
	let queue = [];
	let check = Array(10001).fill(0);

	function BFS() {
		queue.push(s); // 현수의 위치
		check[s] = 1; // 현수의 위치를 방문 체크해준다.

		// BFS 시작
		let l = 0; // level 0부터 시작하겠다.
		while (queue.length) {
			let len = queue.length;
			//같은 레벨을 탐색한다.
			for (let i = 0; i < len; i++) {
				let x = queue.shift(); //Queue 현수의 위치 index가 x에 반환된다.
				if (x === e) return l; // level은 0부터 시작이므로 +1

				// 현수의 좌표 x에서 각각의 이동을 temp에 뿌려준다.
				for (let temp of [x - 1, x + 1, x + 5]) {
					if (temp === e) return l + 1; // l = 1일때 가지를 뻗었을 때, e를 찾았다면 l+1이 답이다.
					// level이 의미하는 것이 수행 회수이므로 BFS로 구하면 된다.
					if (temp > 0 && temp <= 100000 && check[temp] === 0) {
						check[temp] = 1;
						queue.push(temp);
					}
				}
			}
			l++;
		}
	}
	answer = BFS();
	return answer;
}
console.log(solution(5, 14));
