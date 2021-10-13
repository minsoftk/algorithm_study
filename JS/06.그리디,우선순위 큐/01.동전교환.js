// 그리디인지 확인하면 쉽다.
//
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

function solution(nums, m) {
	let answer = 0;
	for (let i = nums.length - 1; i >= 0; i--) {
		answer += parseInt(m / nums[i]);
		m = m % nums[i];
	}
	return answer;
}
console.log(solution([1, 5, 10], 15)); // 2
