function solution(map) {
	let answer = 0;
	// 방향을 탐색하기 위한 시계방향 dx, dy
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map.length; j++) {
			// 상우하좌 순서로 원래 값과 비교를 한다. 만약 봉우리보다 큰 값이 있다면 false후 break
			let flag = true;
			for (let k = 0; k < 4; k++) {
				xx = i + dx[k];
				yy = j + dy[k];

				// xx와 yy가 0보다 작은 경우에는 비교할 필요가 없다.
				// map[xx][yy] > map[i][j] 인 경우에는 봉우리가 아니므로 flag = false
				if (
					xx >= 0 &&
					xx < map.length &&
					yy >= 0 &&
					yy < map.length &&
					map[xx][yy] > map[i][j]
				) {
					// 만족하지 못하면 false flag를 만들고 break;
					flag = false;
					break;
				}
			}
			// for문이 끝나고도 flag가 true라면 봉우리이므로 +1을 해준다.
			if (flag) answer++;
		}
	}
	return answer;
}
console.log(
	solution([
		[5, 3, 7, 2, 3],
		[3, 7, 1, 6, 1],
		[7, 2, 5, 3, 4],
		[4, 3, 6, 4, 1],
		[8, 7, 3, 5, 2],
	])
); // 10

/*

/*
function solution(nums) {
	let answer = 0;
	// 방향을 탐색하기 위한 시계방향 dx, dy
	let dx = [-1, 0, 1, 0];
	let dy = [0, 1, 0, -1];

	for (let x = 0; x < nums.length; x++) {
		for (let y = 0; y < nums.length; y++) {
			// 만족하지 못하면 false flag를 만들고 break;
			let flag = true;
			// 상우하좌 순서로 원래 값과 비교를 한다. 만약 봉우리보다 큰 값이 있다면 false후 break
			for (let i = 0; i < 4; i++) {
				xx = x + dx[i];
				yy = y + dy[i];
				if (
					(xx >= 0 && xx < nums.length) ||
					(yy >= 0 && yy < nums.length && nums[x][y] <= nums[xx][yy])
				) {
					flag = 0;
					break;
				}
			}
			// flag가 참이라면 봉우리 만족, answer++
			if (flag) answer++;
		}
	}
	return answer;
}

console.log(
	solution([
		[5, 3, 7, 2, 3],
		[3, 7, 1, 6, 1],
		[7, 2, 5, 3, 4],
		[4, 3, 6, 4, 1],
		[8, 7, 3, 5, 2],
	])
);
*/
