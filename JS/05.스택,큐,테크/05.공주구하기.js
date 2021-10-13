function solution(n, k) {
	let answer;
	let queue = [];

	// 1부터 N까지의 숫자를 queue에 넣어준다.
	for (let i = 1; i <= n; i++) {
		queue.push(i);
	}

	// queue의 길이가 1만 남을 때까지 loop 반복한다.
	while (queue.length > 1) {
		// k개수만큼 건너서 제외하게 된다.
		// 따라서 k가 3인 경우에는 1을 뺀 뒤 다시 push,
		// 2를 뺀 뒤 다시 push, 3인 경우에는 shift()로 빼준다. k가 3일때 총 2번의 연산이 필요
		// for문 조건은 k-1회 실행이 되야 한다.
		for (let i = 1; i < k; i++) queue.push(queue.shift());

		// 1, 2 push 하고나서 3 shift() 작업을 length가 1이 될때까지 반복.
		queue.shift();

		// queue의 사이즈가 1이라면 정답!
		if (queue.length === 1) {
			answer = queue.shift();
		}
	}
	return answer;
}

console.log(solution(8, 3)); // 7
