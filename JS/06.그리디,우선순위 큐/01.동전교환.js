function solution(nums, m) {
	let answer;
	let n = nums.length - 1;
	let cnt = 0;
	for (let i = 0; i < nums.length; i++) {
		while (nums[n - i] < m) {
			m -= nums[n];
			cnt++;
		}
	}
	answer = cnt;
	return answer;
}

console.log(solution([1, 5, 10], 15)); // 2
