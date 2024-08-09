function canVisitAllRooms(rooms: number[][]): boolean {
	const visited = rooms.map((room) => false);

	visited[0] = true;
	dfs(0);

	for (let x of visited) {
		if (x === false) return false;
	}
	return true;

	function dfs(roomNumber: number) {
		visited[roomNumber] = true;
		for (let i = 0; i < rooms[roomNumber].length; i++) {
			const key = rooms[roomNumber][i];
			if (!visited[key]) {
				dfs(key);
			}
		}
	}
}

console.log('🚀 ~ canVisitAllRooms ~ canVisitAllRooms:', canVisitAllRooms([[1], [2], [3], []]));
console.log('🚀 ~ canVisitAllRooms ~ canVisitAllRooms:', canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]));
