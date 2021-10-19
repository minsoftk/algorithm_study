function solution(nums) {
	let answer = 00;
	let dy = Array(nums.length + 1).fill(0);

	// 증가 수열로 만들 수 있으면, dy에 저장한다.
	dy[0] = 1;
	for (let i = 0; i < nums.length; i++) {
		let max = 0;
		for (let j = i - 1; j >= 0; j--) {
			if (nums[i] > nums[j] && dy[j] > max) {
				max = dy[j];
			}
		}
		dy[j] = max + 1;
	}
	return answer;
}

console.log(solution([5, 3, 7, 8, 6, 2, 9, 4])); //4
