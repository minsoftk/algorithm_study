function solution(arr) {
	let answer = 0;

	// (점수, 시간)을 저장할 배열을 따로 만들어준다.
	let temp = [];
	for (let i = 0; i < arr.length; i++) {
		for (let j = 1; j < arr[i].length; j++) {
			temp.push([arr[i][0], arr[i][j]]);
		}
	}

	// 시간을 기준으로 temp[i][1] 내림차순을 해주고, 같은 점수가 있을때 temp[i][0] 내림차순
	temp.sort((a, b) => {
		if (a[1] === b[1]) return b[0] - a[0];
		return b[1] - a[1];
	});

	// 최대시간만큼 체크배열 생성
	let maxTime = temp[0][1]; // 최대 시간
	let check = Array(maxTime + 1).fill(0);

	let sum = 0; // 최대 점수를 저장할 변수
	let score = 0; // 점수 임시 저장 변수
	for (let i = 0; i < temp.length; i++) {
		// 만약 시간이 체크 되었다면 이전에 더한 점수와 현재 점수와 비교해준다.
		// 현재 체크 배열은 0으로 초기화
		if (check[temp[i][1]] !== 0) {
			// 이전 스코어가 더 작을 경우에 이전 점수를 빼고 더 큰 점수를 더해줌.
			if (score < temp[i][0]) sum += temp[i][0] - score;
		} else {
			// 시간이 check가 안되었으면 그냥 sum에 더함.
			check[temp[i][1]] = 1;
			sum += temp[i][0];
			score = temp[i][0]; // 체크를 해주고 다음 temp[i][0] 값과 비교하기 위해 임시 저장
		}
	}
	answer = sum;
	return answer;
}
console.log(
	solution([
		[1, 1, 3, 5],
		[2, 2, 4],
		[3, 1, 2],
		[4, 3],
	])
); // 7
