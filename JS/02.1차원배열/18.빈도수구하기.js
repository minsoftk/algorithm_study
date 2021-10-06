function solution(arr, k) {
	let hash = new Map();
	for (let x of arr) {
		if (hash.has(x)) {
			hash.set(x, hash.get(x) + 1);
		} else {
			hash.set(x, (hash.get(x) || 0) + 1);
		}
	}
	let temp = [...hash].sort((a, b) => b[1] - a[1]);
	console.log('temp', temp);
	let answer = [];
	for (let i = 0; i < k; i++) {
		answer.push(temp[i][0]);
	}

	return answer;
}

console.log(solution([1, 1, 1, 2, 2, 3], 2));
console.log(solution([3, 3, 3, 5, 1, 1, 1, 7, 2, 2], 3));
