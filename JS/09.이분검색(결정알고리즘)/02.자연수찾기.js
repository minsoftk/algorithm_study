// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(nums, k) {
	let answer = 0;

	let left = 0,
		right = nums.length - 1;
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (nums[mid] - mid - 1 < k) {
			left = mid + 1;
		} else right = mid - 1;
	}
	console.log(left, right);
	answer = left + k;
	return answer;
}
console.log(solution([2, 5, 7, 9, 12], 6)); // 10
