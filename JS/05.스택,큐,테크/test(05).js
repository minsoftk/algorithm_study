function solution(arr, m) {
	let answer = 0;
	let queue = Array(21);
	for (let i = 1; i < queue.length; i++) queue[i] = Array();

	for (let i = 0; i < arr.length; i++) {
		const len = arr[i].length;
		while (queue[len].length && i - queue[len][0] > m) {
			queue[len].shift();
		}
		answer += queue[len].length;
		queue[len].push(i);
	}

	return answer;
}

console.log(solution(['back', 'seen', 'big', 'good', 'size'], 2)); // 3
console.log(solution(['back', 'seen', 'good', 'size'], 2)); // 5

// 왜 O(n)인가?
