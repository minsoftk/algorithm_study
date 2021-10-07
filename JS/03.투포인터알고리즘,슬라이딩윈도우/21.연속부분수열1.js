function solution(nums, k) {
	let left = 0,
		answer = 0;
	let sum = 0;
	// while (start <= end && end <= nums.length) {
	// 	if (sum === k) {
	// 		cnt++;
	// 		sum -= nums[start];
	// 		start++;
	// 	} else if (sum > k && start <= end) {
	// 		// 만약 1 1 1 3 100 경우?
	// 		//앞에 원소 빼준다.
	// 		sum -= nums[start];
	// 		start++;
	// 	} else {
	// 		//뒤에 원소 추가 해준다.
	// 		sum += nums[end];
	// 		end++;
	// 	}
	// }
	for (let right = 0; right < nums.length; right++) {
		sum += nums[right];
		while (sum > m) {
			sum -= nums[left++];
		}
		if (sum === m) answer++;
	}
	return cnt;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
console.log(solution([1, 1, 1, 1, 1, 1], 3));
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));

/**
 

 */
