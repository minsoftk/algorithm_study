// 0이 m만큼일때 수열의 최대 길이?

function solution(nums, k) {
	let answer = 0;
	let left = 0;
	let len = 0,
		cnt = 0;
	for (let right = 0; right < nums.length; right++) {
		if (nums[right] === 0) cnt++;
		while (cnt > k) {
			if (nums[left++] === 0) {
				cnt--;
			}
		}
		if (cnt === k) len = right - left + 1;
		answer = Math.max(answer, len);
	}
	return answer;
}
console.log(
	solution([1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1], 3)
); // 12
console.log(
	solution([1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1], 3)
); // 10
