function solution(nums, m) {
	let answer = 0,
		sum = 0;

	let hash = new Map();
	for (let i = 0; i < nums.length; i++) {
		sum += nums[i];
		if (sum === m) answer++;
		if (hash.has(sum - m)) answer += hash.get(sum - m);
		hash.set(sum, (hash.get(sum) || 0) + 1);
	}
	return answer;
}

console.log(solution([1, 2, 3, -3, 1, 2], 3));
console.log(solution([-1, 0, 1], 0));
console.log(solution([-1, -1, -1, 1], 0));
