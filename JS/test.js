function solution2(nums, k) {
	let answer = [];
	let hash = new Map();

	for (let i = 0; i < k - 1; i++) {
		hash.set(nums[i], (hash.get(nums[i]) || 0) + 1);
	}
	return answer;
}
console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));
