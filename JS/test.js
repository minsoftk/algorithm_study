function solution(nums) {
	let answer = 'YES';
	let i = 1;
	while (nums[i - 1] < nums[i] && i < nums.lenght) i++;
	if (i === 1 || i === nums.length) answer = 'NO';
	while (nums[i - 1] > nums[i] && i < nums.lenght) i++;
	if (i === nums.length) answer = 'YES';
	return answer;
}

console.log(solution([1, 2, 3, 4, 5, 3, 1]));
console.log(solution([1, 3, 4, 5, 5, 6, 4, 3]));
console.log(solution([1, 2, 3, 4, 5]));
