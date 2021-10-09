function solution(nums) {
	let answer = 'YES';
	let n = nums.length;
	let i = 0;
	while (i + 1 < n && nums[i] < nums[i + 1]) i++;
	if (i === 0 || i === n - 1) answer = 'NO';
	while (i + 1 < n && nums[i] > nums[i + 1]) i++;
	if (i !== n - 1) answer = 'NO';
	return answer;
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]));
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution([1, 2, 3, 4, 5]));
