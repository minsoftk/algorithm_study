function solution(nums, k) {
	let answer = String(nums).split('');
	let stack = [];

	for (let i = 0; i < answer.length; i++) {
		let cnt = 0;
		while (
			stack.length &&
			parseInt(answer[i]) > parseInt(answer[stack[stack.length - 1]]) &&
			cnt < k - 1
		) {
			stack.pop();
			cnt++;
			if (cnt === 3) break;
		}
		stack.push(i);
	}
	for (let i = 0; i < k; i++) {
		answer.splice(answer[stack[i]], 1);
	}
	answer = Number(answer.join(''));
	return answer;
}

console.log(solution(2322113, 3)); // 2113
console.log(solution(200200, 1)); // 200
console.log(solution(123, 3)); // 0
