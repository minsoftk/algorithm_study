function shortestPathBinaryMatrix(grid: number[][]): number {
	const n = grid.length;
	if (grid[0][0] === 1 || grid[n - 1][n - 1] === 1) return -1;
	if (n === 1) return 1;

	const visited = grid.map((row: number[]) => row.map((i) => false));

	const dx = [-1, -1, 0, 1, 1, 1, 0, -1];
	const dy = [0, 1, 1, 1, 0, -1, -1, -1];

	let queue: number[][] = [];
	let pathCnt = 1e9;
	if (grid[0][0] !== 0) return -1;

	queue.push([0, 0, 1]);
	visited[0][0] = true;

	while (queue.length) {
		const [x, y, count] = queue.shift() as number[];
		for (let i = 0; i < 8; i += 1) {
			const nx = x + dx[i];
			const ny = y + dy[i];
			if (nx === n - 1 && ny === n - 1) {
				pathCnt = Math.min(pathCnt, count + 1);
			}
			if (checkValid(nx, ny, n) && grid[nx][ny] === 0 && !visited[nx][ny]) {
				queue.push([nx, ny, count + 1]);
				visited[nx][ny] = true;
			}
		}
	}
	if (!visited[n - 1][n - 1] || pathCnt === 1e9) return -1;
	return pathCnt;

	function checkValid(xx: number, yy: number, n: number): boolean {
		if (0 <= xx && xx < n && 0 <= yy && yy < n) {
			return true;
		}
		return false;
	}
}

// console.log(
// 	'🚀 ~ shortestPathBinaryMatrix ~ shortestPathBinaryMatrix:',
// 	shortestPathBinaryMatrix([
// 		[0, 0, 0],
// 		[1, 1, 0],
// 		[1, 1, 0],
// 	])
// ); // 3
console.log(
	'🚀 ~ shortestPathBinaryMatrix ~ shortestPathBinaryMatrix:',
	shortestPathBinaryMatrix([[0,1],[1,0]])
); // 2

console.log(
	'🚀 ~ shortestPathBinaryMatrix ~ shortestPathBinaryMatrix:',
	shortestPathBinaryMatrix([[0]])
); // -1
console.log(
	'🚀 ~ shortestPathBinaryMatrix ~ shortestPathBinaryMatrix:',
	shortestPathBinaryMatrix([[1]])
); // -1
