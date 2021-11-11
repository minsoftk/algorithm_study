function solution(nums) {
	let answer;
	let stack = [];

	let arr = nums.sort((a, b) => a[0] - b[0]);
	let sum = 0;
	for (let i = 0; i < nums.length; i++) {
		// 만약 (1,3) -> (2, 5) 처럼 prev의 1번 idx값이 next의 0번 인덱스 값보다 크다면
		// (1, 5)로 연결해준다.
		if (stack.length && stack[stack.length - 1][1] > nums[i][0]) {
			let temp = stack.pop();
			stack.push([temp[0], nums[i][1]]);
		} else stack.push(nums[i]);
	}

	while (stack.length > 0) {
		sum += stack[stack.length - 1][1] - stack[stack.length - 1][0];
		stack.pop();
	}
	answer = sum;
	return answer;
}

console.log(
	solution([
		[1, 3],
		[2, 5],
		[7, 10],
	])
); // 7
console.log(
	solution([
		[5, 6],
		[1, 3],
		[7, 8],
		[9, 10],
	])
); // 5

function solution(nums) {
	let answer;

	let arr = nums.sort((a, b) => a[0] - b[0]);
	let s = nums[0][0];
	let e = nums[0][1];
	for (let i = 1; i < nums.length; i++) {
		// 만약 (1,3) -> (2, 5) 처럼 prev의 1번 idx값이 next의 0번 인덱스 값보다 크다면
		// (1, 5)로 연결해준다.
		if (nums[i][0] <= e && nums[i][1] > e) {
			e = nums[i][1];
		} else if (nums[i][0] > e) {
			answer += e - s;
			s = nums[i][0];
			e = nums[i][1];
		}
	}
	answer += e - s;
	return answer;
}
console.log(
	solution([
		[1, 3],
		[2, 5],
		[7, 10],
	])
); // 7
console.log(
	solution([
		[5, 6],
		[1, 3],
		[7, 8],
		[9, 10],
	])
); // 5
