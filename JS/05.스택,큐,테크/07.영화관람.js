//거꾸로 집어넣는다.
// 내림차순 이용

// stack에 들어있는 값 이용
// 간단한거 같은데 이해가 좀 어려움.
function solution(nums) {
	let n = nums.length;
	let answer = Array(n).fill(0);
	let stack = [];
	for (let i = 0; i < n; i--) {
		while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
			answer[stack[stack.length - 1]] = i - stack[stack.length - 1];
			stack.pop();
		}
		stack.push(i);
	}
	return answer;
}
console.log(solution([50, 57, 52, 53, 51])); // [0, 0, 2, 2, 4]+
console.log(solution([50, 46, 55, 76, 65, 50, 55, 53, 55, 50])); // [0, 1, 0, 0, 4, 5, 5, 7, 5, 9]

// 왜 O(n)인가?
