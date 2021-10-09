function solution(nums) {
	let answer = 0;

	// 가장 자리를 포함해서 새로운 배열을 만들어 주고 0으로 초기화
	let arr = new Array(nums.length + 2);
	for (let i = 0; i <= nums.length + 1; i++) {
		arr[i] = new Array(nums.length + 2).fill(0);
	}

	// 기존의 배열의 값을 새로운 배열에 입력
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			arr[i + 1][j + 1] = nums[i][j];
		}
	}

	// 방향을 탐색하기 위한 시계방향 dx, dy
	let dx = [0, 1, 0, -1];
	let dy = [-1, 0, 1, 0];

	for (let x = 1; x <= nums.length; x++) {
		for (let y = 1; y <= nums.length; y++) {
			// 만족하지 못하면 false flag를 만들고 break;
			let flag = true;

			// 상우하좌 순서로 원래 값과 비교를 한다. 만약 봉우리보다 큰 값이 있다면 false후 break
			for (let i = 0; i < 4; i++) {
				xx = x + dx[i];
				yy = y + dy[i];
				if (arr[x][y] <= arr[xx][yy]) {
					flag = false;
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
