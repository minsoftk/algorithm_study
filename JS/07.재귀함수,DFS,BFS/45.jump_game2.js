/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
	function BFS() {
		let L = 0;
		queue.push(0);
		check[0] = 1;
		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				for (let j = 1; j <= nums[front]; j++) {
					let move = front + j;
					if (move === nums.length - 1) return L + 1;
					if (move < nums.length && check[move] === 0) {
						check[move] = 1;
						queue.push(move);
					}
				}
			}
			L++;
		}
	}

	let answer;
	let check = Array(nums.length).fill(0);
	let queue = [];

	answer = BFS();
	if (answer === undefined) return 0;
	return answer;
};
