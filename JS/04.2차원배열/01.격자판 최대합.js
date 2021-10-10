function solution(arr) {
	let answer = 0;
	let max = -2147000000,
		row,
		col;
	cross = 0;
	for (let i = 0; i < arr.length; i++) {
		row = 0;
		col = 0;
		for (let j = 0; j < arr.length; j++) {
			row += arr[i][j];
			col += arr[j][i];
			if (i == j) cross += arr[i][j];
		}
		max = Math.max(row, col);
		max = Math.max(max, cross);
	}
	return max;
}

console.log(
	solution([
		[10, 13, 10, 12, 15],
		[12, 39, 30, 23, 11],
		[11, 25, 50, 53, 15],
		[19, 27, 29, 37, 27],
		[19, 13, 30, 13, 19],
	])
);
