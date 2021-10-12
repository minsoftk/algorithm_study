function solution(map) {
	let answer = 'YES';

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map.length; j++) {
			let temp = Math.sqrt(map.length);
			if (i % temp === 0 && j % temp === 0) {
				let sum = 0;
				let set = new Set();
				for (let x = 0; x < temp; x++) {
					for (let y = 0; y < temp; y++) {
						set.add(map[i + x][j + y]);
					}
				}
				for (let x of set) {
					sum += x;
				}
				if (sum !== (map.length * (map.length + 1)) / 2) {
					answer = 'NO';
					break;
				}
			}
		}
	}
	return answer;
}

console.log(
	solution([
		[1, 4, 3, 6, 2, 8, 5, 7, 9],
		[5, 7, 2, 1, 3, 9, 4, 6, 8],
		[9, 8, 6, 7, 5, 4, 2, 3, 1],
		[3, 9, 1, 5, 4, 2, 7, 8, 6],
		[4, 6, 8, 9, 1, 7, 3, 5, 2],
		[7, 2, 5, 8, 6, 3, 9, 1, 4],
		[2, 3, 7, 4, 8, 1, 6, 9, 5],
		[6, 1, 9, 2, 7, 5, 8, 4, 3],
		[8, 5, 4, 3, 9, 6, 1, 2, 7],
	])
); //[1,1,4,2,1,1,0,0]
