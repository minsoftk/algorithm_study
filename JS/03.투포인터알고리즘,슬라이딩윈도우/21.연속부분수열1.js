function solution(nums, m) {
	let left = 0,
		sum = 0,
		answer = 0;

	for (let right = 0; right < nums.length; right++) {
		// 0부터 시작하므로 right idx를 이용해 sum에 더해준다.
		sum += nums[right];
		// sum 값이 m 보다 커졌을 때
		while (sum > m) {
			//left idx 값을 빼주고, +1 증가
			sum -= nums[left++];
		}
		// 만약 sum이 m 일때, answer 증가
		if (sum === m) answer++;
	}
	return answer;
}

console.log(solution([1, 2, 1, 3, 1, 1, 1, 2], 6));
console.log(solution([1, 1, 1, 1, 1, 1], 3));
console.log(solution([1, 2, 1, 2, 1, 2, 1], 3));

// 첫 소스 코드

/**	// while (start <= end && end <= nums.length) {
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
 

 */
