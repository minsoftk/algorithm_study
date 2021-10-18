/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
	let left = 0,
		right = nums.length;

	let answer;
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		// 만약 nums[mid] 값이 target보다 크다면 오른쪽을 버린다.
		if (nums[mid] === target) return mid;
		else if (nums[mid] > target) right = mid - 1;
		else left = mid + 1;
	}
	if (answer === undefined) return -1;
	return answer;
};
