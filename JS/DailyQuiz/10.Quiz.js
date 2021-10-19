function solution(nums, h) {
	function count(mid) {
		let cnt = 0;
		for (let x of nums) {
			cnt += Math.ceil(x / mid);
		}
		return cnt;
	}

	let answer = 0;

	let left = 1,
		right = 10e9;
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (count(mid) <= h) {
			answer = mid;
			right = mid - 1;
		} else left = mid + 1;
	}
	return answer;
}

console.log(solution([29, 12, 24, 5, 19], 6)); // 24
