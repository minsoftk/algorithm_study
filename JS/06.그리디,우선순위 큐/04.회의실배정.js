function solution(meets) {
	let answer = 0;

	// 회의가 끝나는 시간으로 오름차순을 해야지 선택할 수 있는 범위가 넓어진다.
	// 따라서 회의가 끝나는 시간으로 오름차순을 한다.
	// 회의 시작시간과 끝나는 시간이 같을 경우(testcase 3번)에도 오름차순으로 만들어줘야
	// (1,3), (3,3) 2개 선택이 가능하다. 따라서 if (a[1] == b[1]) return a[0] - b[0]; 가 추가
	meets.sort((a, b) => {
		if (a[1] == b[1]) return a[0] - b[0];
		return a[1] - b[1];
	});

	// left idx로 회의 시작 시간을 저장해준다.
	let left = 0;
	for (let x of meets) {
		// 만약 회의의 시간이 left보다 크거나 같다면
		if (x[0] >= left) {
			// left에 회의가 끝나는 시간을 저장해주고, answer++
			left = x[1];
			answer++;
		}
		// 그럼 left(회의가 끝나는 시간)보다 크거나 같은 회의를 다시 선택.
	}
	return answer;
}

console.log(
	solution([
		[1, 4],
		[2, 3],
		[3, 5],
		[4, 6],
		[5, 7],
	])
); // 3
console.log(
	solution([
		[3, 3],
		[1, 3],
		[2, 3],
	]) // 1 3, 3 3
); // 2
