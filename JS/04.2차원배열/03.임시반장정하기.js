function solution(map) {
	let answer = 0;

	let cnt = 0;
	let max = -2147000000;

	for (let i = 0; i < map.length; i++) {
		for (let j = 0; j < map.length; j++) {
			// 비교가 끝날 때마다 cnt = 0으로 초기화 해준다.
			cnt = 0;

			// i번째 학생 j 번째 학생과 비교해 같은 반이었던 학생 수를 세준다.
			// 같은 반이었던 학생을 찾는 것이므로 한번이라도 같은 반이었다면 break를 해준다.
			for (let k = 0; k < map.length; k++) {
				if (map[i][k] === map[j][k]) {
					cnt++;
					break;
				}
			}
		}

		// cnt > max라면 같은 반 학생 수가 가장 많으므로 cnt를 입력해준다.
		// i번째 학생 기준이므로 answer에 i를 입력해준다.
		// 만약 cnt >= max가 된다면? -> 가장 나중 번호의 학생이 return 된다.
		if (cnt > max) {
			max = cnt;
			answer = i;
		}
	}
	// i번째 학생 return, 0부터 시작하므로 +1
	return answer + 1;
}

console.log(
	solution([
		[2, 3, 1, 7, 3],
		[4, 1, 9, 6, 8],
		[5, 5, 2, 4, 4],
		[6, 5, 2, 6, 7],
		[8, 4, 2, 2, 2],
	])
); // 4

/*
같다를 붙였을 때?
 if (cnt > max){
	max=cnt;
	answer=i;
}
*/

console.log(
	solution([
		[2, 3, 1, 7, 3],
		[4, 1, 9, 6, 8],
		[5, 5, 2, 4, 4],
		[6, 5, 2, 6, 7],
		[8, 4, 2, 2, 2],
	])
);
