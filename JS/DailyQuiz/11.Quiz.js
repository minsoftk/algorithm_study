function solution(arr) {
	let answer = 0;
	let n = arr.length;
	let dy1 = Array(n).fill(0);
	let dy2 = Array(n).fill(0);

	dy1[0] = 1;
	for (let i = 1; i < n; i++) {
		let max = 0;
		for (let j = i - 1; j >= 0; j--) {
			if (arr[j] < arr[i] && dy1[j] > max) {
				max = dy1[j];
			}
		}
		dy1[i] = max + 1;
	}

	dy2[n - 1] = 1;
	for (let i = n - 2; i >= 0; i--) {
		let max = 0;
		for (let j = i + 1; j < n; j++) {
			if (arr[j] < arr[i] && dy2[j] > max) {
				max = dy2[j];
			}
		}

		dy2[i] = max + 1;
	}
	for (let i = 0; i < arr.length; i++) {
		answer = Math.max(answer, dy1[i] + dy2[i]);
	}
	return answer - 1;
}
console.log(solution([5, 3, 7, 8, 6, 2, 9, 4, 2, 1])); // 7
