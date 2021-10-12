function solution(nums) {
	let answer = [];
	let stack = [];
	for (let i = 0; i < nums.lenght; i++) {
		let top = stack[stack.length - 1];
		while (stack.length && nums[i] > nums[top]) {
			answer[stack[stack.length - 1]] = i + 1;
			stack.pop();
		}
		stack.push(i);
	}
	return answer;
}
