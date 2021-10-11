function solution(board, nums) {
	let answer = 0,
		sum = 0;
	let s1, s2, s3, s4; //  대각선 \ ,/ , 행, 열 각각의 빙고 체크 변수

	let pan = Array.from(Array(2), () => Array(30).fill(0)); //  board의 각각 행과 열의 값들을 인덱스로 기록하기 위한 2차원 배열
	let binggo = Array.from(Array(5), () => Array(5).fill(0)); // 사회자가 부르는 nums 의 값들이 board 에 있는지 체크해주는 2차원 배열

	for (let i = 0; i < 5; i++) {
		for (let j = 0; j < 5; j++) {
			let value = board[i][j]; //
			pan[0][value] = i; // value를 인덱스를 가진 배열에  x 축 값 선언
			pan[1][value] = j; // value를 인덱스를 가진 배열에  y 축 값 선언
		}
	}
	console.log(pan);
	for (let i = 0; i < nums.length; i++) {
		let value = nums[i];
		binggo[pan[0][value]][pan[1][value]] = 1; // 사회자가 부른 값의 좌표 값을 가져와 1로 체크
		s1 = s2 = s3 = s4 = 1; // 빙고 체크의 기본값을 1로 세팅 (1 : 빙고 ,0: x )

		// \ 대각선 판별
		if (pan[0][value] === pan[1][value]) {
			// (0,0) ,(1,1),(2,2) 이 대각선들의 위치이기때문
			for (let i = 0; i < 5; i++) {
				if (binggo[i][i] === 0) {
					// 한개라도 0이라면 반복문 중단
					s1 = 0;
				}
			}
		} else {
			s1 = 0; // 사회자가 부른 값이 대각선 방향이 아니므로 x 표시
		}

		if (pan[0][value] + pan[1][value] === 4) {
			// '/' 대각선은 (0,4) , (4,0)
			for (let i = 0; i < 5; i++) {
				if (binggo[i][4 - i] === 0) {
					// 한개라도 0이라면 반복문 중단
					s2 = 0;
				}
			}
		} else {
			s2 = 0; // 사회자가 부른 값이 대각선 방향이 아니다
		}

		for (let i = 0; i < 5; i++) {
			if (binggo[pan[0][value]][i] === 0) {
				// 행 중에서 한개라도 0이 발견되면 빙고 x
				s3 = 0;
			}
			if (binggo[i][pan[1][value]] === 0) {
				// 열 중에서 한개라도 0이 발견되면 빙고 x
				s4 = 0;
			}
		}

		sum += s1 + s2 + s3 + s4; // 빙고의 총 합계

		if (sum >= 3) {
			answer = i + 1;
			break;
		}
	}
	return answer;
}

console.log(
	solution(
		[
			[11, 12, 2, 24, 10],
			[16, 1, 13, 3, 25],
			[6, 20, 5, 21, 17],
			[19, 4, 8, 14, 9],
			[22, 15, 7, 23, 18],
		],
		[
			5, 10, 7, 16, 2, 4, 22, 8, 17, 13, 3, 18, 1, 6, 25, 12, 19, 23, 14, 21,
			11, 24, 9, 20, 15,
		]
	)
); // 15
