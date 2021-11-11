/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function sol(nums) {
	function DFS(L) {
		if (L === nums.length) {
			if (count >= 2) return tmp;
			count++;
		} else {
			for (let i = 0; i < nums.length; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					tmp.push(nums[i]);
					DFS(L + 1);
					check[i] = 0;
					tmp.pop();
				}
			}
		}
	}

	(answer = []), (start = []), (count = 0);
	for (let i = 0; i < nums.length; i++) start.push(nums[i]);
	nums.sort((a, b) => a - b);
	let end = [];
	for (let i = nums.length - 1; i >= 0; i--) end.push(nums[i]);
	let check = Array(nums.length).fill(0);
	if (start === end) {
		return start.reverse();
	}
	DFS(0);
	return answer[1];
}
console.log(sol([1, 2, 3]));
console.log(sol([3, 2, 1]));
