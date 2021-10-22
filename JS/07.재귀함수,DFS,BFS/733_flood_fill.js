function solution(image, sr, sc, newColor) {
	let queue = [];
	let check = Array(image.length).fill(0);
	for (let i = 0; i < image.length; i++)
		check[i] = Array(image[0].length).fill(0);

	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	queue.push([sr, sc]);
	check[sr][sc] = 1;

	let tempcolor = image[sr][sc];
	image[sr][sc] = newColor;

	while (queue.length) {
		let front = queue.shift();
		for (let i = 0; i < 4; i++) {
			let xx = front[0] + dx[i];
			let yy = front[1] + dy[i];
			if (
				xx >= 0 &&
				xx < image.length &&
				yy >= 0 &&
				yy < image[0].length &&
				check[xx][yy] === 0 &&
				image[xx][yy] === tempcolor
			) {
				queue.push([xx, yy]);
				check[xx][yy] = 1;
				image[xx][yy] = newColor;
			}
		}
	}
	return image;
}

console.log(
	solution(
		[
			[1, 1, 1],
			[1, 1, 0],
			[1, 0, 1],
		],
		1,
		1,
		2
	)
);
console.log(
	solution(
		[
			[0, 0, 0],
			[0, 0, 0],
		],
		0,
		0,
		2
	)
);
