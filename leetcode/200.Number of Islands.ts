function numIslands(grid: string[][]): number {
	const visited = grid.map((row) => row.map((col) => false));

	const m = grid.length;
	const n = grid[0].length;
	const queue: number[][] = [];
	const dx = [-1, 0, 1, 0];
	const dy = [0, 1, 0, -1];
	let cnt = 0;
	for (let i = 0; i < grid.length; i += 1) {
		for (let j = 0; j < grid[i].length; j += 1) {
			if (grid[i][j] === '1' && !visited[i][j]) {
				visited[i][j] = true;
				queue.push([i, j]);
				while (queue.length) {
					const len = queue.length;
					const front = queue.shift();
					if (!front) return 0;
					const [x, y] = front;
					for (let l = 0; l < 4; l += 1) {
						const nx: number = x + dx[l];
						const ny: number = y + dy[l];

						if (checkValid(nx, ny) && !visited[nx][ny]) {
							queue.push([nx, ny]);
							visited[nx][ny] = true;
						}
					}
				}
				cnt += 1;
			}
		}
	}

	return cnt;

	function checkValid(xx: number, yy: number): boolean {
		if (0 <= xx && xx < m && 0 <= yy && yy < n) return true;
		return false;
	}
}

console.log(
	'🚀 ~ numIslands ~ numIslands:',
	numIslands([
		['1', '1', '1', '1', '0'],
		['1', '1', '0', '1', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '0', '0', '0'],
	])
); // 1
console.log(
	'🚀 ~ numIslands ~ numIslands:',
	numIslands([
		['1', '1', '0', '0', '0'],
		['1', '1', '0', '0', '0'],
		['0', '0', '1', '0', '0'],
		['0', '0', '0', '1', '1'],
	])
); // 3
