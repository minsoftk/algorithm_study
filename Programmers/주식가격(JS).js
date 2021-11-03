function solution(arr) {
	let answer = [];
	let stack = [];
	for (let i = 0; i < arr.length; i++) {
		while (stack.length && arr[stack[stack.length - 1]] > arr[i]) {
			// index 저장이니깐 i랑 stack에 저장된 index랑 차이가 시간차이다.
			console.log(i);
			let len = stack.length - 1;
			answer[stack[len]] = i - stack[len];

			// 3의 index를 제거
			stack.pop();
		}
		stack.push(i);
	}

	while (stack.length) {
		let len = stack.length - 1;
		answer[stack[len]] = arr.length - stack[len] - 1;
		stack.pop();
	}
	return answer;
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
