function solution(nums) {
	function BFS() {
		let L = 0;
		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				for (let j = 1; j <= nums[front]; j++) {
					let move = front + j;
					if (move === nums.length - 1) return L + 1; // 한 단계 더 깊이 들어가는 과정에서 발견했기 때문에 L+1을 return
					if (check[move] === 0 && move < nums.length) {
						check[move] = 1;
						queue.push(move);
					}
				}
			}
			L++;
		}
	}
	let answer;
	let check = Array(nums.length + 1).fill(0);
	let queue = [];

	queue.push(0);
	check[0] = 1;
	answer = BFS();
	if (answer === undefined) return 0;
	return answer;
}
console.log(solution([2, 3, 1, 1, 4]));
