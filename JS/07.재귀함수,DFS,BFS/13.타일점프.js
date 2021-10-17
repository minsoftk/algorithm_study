function solution(num) {
	let answer = 0;
	let check = Array(num.length).fill(0);
	let queue = [];

	function BFS() {
		queue.push(0); // 현수의 위치
		check[0] = 1; // 현수의 위치 체크

		let L = 0; // BFS를 Level 별로 컨트롤 하기 위함.
		// BFS 시작, Queue에 요소가 있다면 계속 돌린다.
		while (queue.length) {
			let len = queue.length; // 큐의 길이를 저장한다.
			for (let i = 0; i < len; i++) {
				let front = queue.shift(); // 최상단의 값 top에 저장

				// Queue에 저장되는 것은 입력받은 num의 index
				// num의 index 값 만큼 움직일 수 있으므로, Queue의 최상단 front index 값 만큼 for문을 돌린다.
				for (let j = 1; j <= num[front]; j++) {
					let move = front + j; // 얼마만큼 움직이는지 저장하는 move 변수

					// move값이 끝까지 도달했을 때 Level을 return.
					// 이 조건문이 실행이 될때는 가장 처음 도달했을 때이다. 따라서 현재 Level이 가장 최소횟수의 Level이 된다.
					// Queue에 추가될 한단계 깊은 곳을 탐색하는 과정이므로 L + 1을 return해준다.
					if (move === num.length - 1) return L + 1;

					// move는 0보다 커야하고, num배열의 길이를 넘으면 안된다.
					// 방문하지 않았을 때, 방문 체크를 해주고 Queue에 넣는다.
					if (move > 0 && move < num.length && check[move] === 0) {
						check[move] = 1;
						queue.push(move);
					}
				}
			}
			L++; // 레벨을 증가시킨다.
		}
	}
	answer = BFS();
	// BFS에서 return을 하지 않는다면, 값을 할당하지 않았기 때문에 undefined를 가지고 있다.
	// 이 경우 -1을 return
	if (answer === undefined) answer = -1;
	return answer;
}
console.log(solution([2, 2, 0, 2, 1, 1])); // 3
console.log(solution([1, 0, 1, 1, 3, 1, 2, 1])); // -1
