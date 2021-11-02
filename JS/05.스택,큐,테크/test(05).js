function solution(arr, m) {
	let answer = 0;

	for (let i = 0; i < arr.length - 1; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (j - i <= m && arr[i].length === arr[j].length) answer++;
		}
	}
	return answer;
}

console.log(solution(['back', 'seen', 'big', 'good', 'size'], 2)); // 3
console.log(solution(['back', 'seen', 'good', 'size'], 2)); // 5

// 왜 O(n)인가?
