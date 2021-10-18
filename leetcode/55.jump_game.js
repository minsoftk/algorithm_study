/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
	function BFS() {
		while (queue.length) {
			let front = queue.shift();
			if (front === nums.length - 1) return true;
			for (let i = 1; i <= nums[front]; i++) {
				if (check[front + i] === 0) {
					queue.push(front + i);
					check[front + i] = 1;
				}
			}
		}
	}

	let answer = false;
	let queue = [];
	let check = Array(nums.length).fill(0);

	queue.push(0);
	check[0] = 1;
	answer = BFS();
	if (answer === undefined) return false;
	return answer;
};
