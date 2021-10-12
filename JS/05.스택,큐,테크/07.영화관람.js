function solution(nums) {
	let answer = '';
	let stack = [];
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] >= nums[i + 1]) {
			stack.pop();
			stack.push(i+1, nums[i]);
		} else {
			if (stack[0][1] > nums[i])
		}
	}
	console.log(stack);

	return answer;
}
console.log(solution([50, 57, 52, 53, 51])); // [0, 0, 2, 2, 4]
console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50])); // [0, 1, 0, 0, 4, 5, 5, 7, 5, 9]
