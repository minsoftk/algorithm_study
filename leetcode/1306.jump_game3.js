/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
	function BFS() {
		while (queue.length) {
			let len = queue.length;
			for (let i = 0; i < len; i++) {
				let front = queue.shift();
				let p_move = front + arr[front];
				let m_move = front - arr[front];

				if (arr[p_move] === 0 || arr[m_move] === 0) return true;
				if (p_move >= 0 && p_move < arr.length && check[p_move] === 0) {
					check[p_move] = 1;
					queue.push(p_move);
				}
				if (m_move >= 0 && m_move < arr.length && check[m_move] === 0) {
					check[m_move] = 1;
					queue.push(m_move);
				}
			}
		}
	}
	let answer = false;
	let queue = [];
	let check = Array(arr.length).fill(0);

	queue.push(start);
	check[start] = 1;
	answer = BFS();
	if (answer === undefined) answer = false;
	return answer;
};
