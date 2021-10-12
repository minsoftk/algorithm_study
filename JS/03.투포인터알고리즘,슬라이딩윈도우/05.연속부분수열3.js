// M 이하가 되는 경우의 수를 구하는 것.

function solution(nums, m) {
	let left = 0,
		sum = 0,
		answer = 0;

	for (let right = 0; right < nums.length; right++) {
		// sum에 right idx 값 더해주며 +1 증가시킨다.
		sum += nums[right];
		// sum이 m보다 커지면 left idx값 빼주고, 증가시킨다.
		while (sum > m) {
			sum -= nums[left++];
		}
		//정확한 원리?
		answer += right - left + 1;
	}
	return answer;
}

console.log(solution([1, 3, 1, 2, 3], 5)); //10
console.log(solution([1, 1, 1, 1, 1, 1], 3)); //15
console.log(solution([1, 1, 2, 2, 1, 2, 1, 3, 2], 5)); //22
