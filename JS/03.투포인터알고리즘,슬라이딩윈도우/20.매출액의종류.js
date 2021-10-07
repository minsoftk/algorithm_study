function solution(nums, k) {
	let answer = [];
	let arr = [];
	let start = 0,
		end = 0;
	let max = 0;
	for (let i = 0; i < nums.length; i++) {
		arr.push(nums[i]);
		end++;
		if (end - start >= k && start <= nums.length - k) {
			let set = new Set();
			for (let x of arr) {
				set.add(x);
			}
			answer.push(set.size);
			arr = arr.slice(1, arr.length);
			start++;
		}
	}
	return answer;
}

console.log(solution([20, 12, 20, 10, 23, 17, 10], 4));
console.log(solution([1, 2, 3, 2, 2, 3, 3, 3, 3, 2], 3));

function solution2(nums, k) {
	let answer = [];
	let nh = new Map();
	let len = nums.length;
	for (let i = 0; i < k - 1; i++) {
		nh.set(nums[i], (nh.get(nums[i]) || 0) + 1);
	}

	let left = 0;
	for (let right = k - 1; right < nums.length; right++) {
		nh.set(nums[right], (nh.get(nums[i]) || 0) + 1);
		answer.push(nh.size);
		nh.set(nums[left], nh.get(nums[left]) - 1);
		if (nh.get(nums[left]) === 0) nh.delete(nums[left]);
		left++;
	}
	return answer;
}
