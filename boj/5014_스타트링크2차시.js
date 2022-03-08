const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [F, S, G, U, D] = input[0].trim().split(' ').map(Number);

// 스타트 링크

// 1. 설계

// - G층까지의 최소횟수를 구해야함.
// - 그래서 최대층인 원하는 S층까지 계속 Up 버튼을 눌러준다.
// - 만약에 S층보다 커진다면 Down버튼을 누른다.

// - 똑같은 층에 도달한다면 같은 수행이 반복되므로 check배열을 만들어 수행하지 않도록 함.

// 최소횟수이므로 BFS의 level로 탐색

// 2. 코딩

// - queue에 시작층 S를 넣고 BFS탐색을 시작. 초기 level = 0설정
// - queue가 빌때까지 반복 수행. up과 down이 조건에 만족하지 않는다면 return -1

// 3. 실수한 부분

// - 시작층 S와 원하는 층 G가 같다면 return 0 을 생각 못함.

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
