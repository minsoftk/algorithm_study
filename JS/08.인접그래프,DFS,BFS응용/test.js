/**
 * @param {number[]} nums
 * @return {number}
 */
function solution(nums) {
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
}

console.log(solution([2, 3, 1, 1, 4])); // 2
console.log(solution([1, 2, 1, 1, 1])); // 3
console.log(solution([2, 1, 1, 1, 1])); // 3
console.log(solution([0, 1, 1, 1, 1])); // 3
console.log(
	solution([
		8, 2, 4, 4, 4, 9, 5, 2, 5, 8, 8, 0, 8, 6, 9, 1, 1, 6, 3, 5, 1, 2, 6, 6, 0,
		4, 8, 6, 0, 3, 2, 8, 7, 6, 5, 1, 7, 0, 3, 4, 8, 3, 5, 9, 0, 4, 0, 1, 0, 5,
		9, 2, 0, 7, 0, 2, 1, 0, 8, 2, 5, 1, 2, 3, 9, 7, 4, 7, 0, 0, 1, 8, 5, 6, 7,
		5, 1, 9, 9, 3, 5, 0, 7, 5,
	])
); // 3
