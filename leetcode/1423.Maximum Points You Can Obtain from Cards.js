function solution(cardPoints, k) {
	let min = 1e9,
		sum = 0,
		total = 0;
	for (let x of cardPoints) total += x;

	if (k === cardPoints.length) return total;
	for (let i = 0; i < cardPoints.length - k; i++) {
		sum += cardPoints[i];
	}

	
	return total - min;
}

console.log(solution([1, 2, 3, 4, 5, 6, 1], 3));
console.log(solution([9, 7, 7, 9, 7, 7, 9], 7));
console.log(solution([100, 40, 17, 9, 73, 75], 3));
console.log(solution([11, 49, 100, 20, 86, 29, 72], 4)); //232
console.log(solution([1, 79, 80, 1, 1, 1, 200, 1], 3)); //202
