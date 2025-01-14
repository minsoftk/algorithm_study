function solution(passes, minutes) {
	let priceRes = []; // 총 금액을 담는 배열

	passes.forEach((pass) => {
		const [defaultPrice, defaultTime, addTime, addPrice] = pass;

		// 기본 요금 시간을 뺀 남은 시간 구하기
		let extraTime = minutes - defaultTime;
		// 총 금액 기본 요금으로 설정
		let total = defaultPrice;

		// 만약 남은 시간이 기본시간보다 작다면 기본요금 넣어주기
		if (extraTime < 0) priceRes.push(defaultPrice);
		else {
			// 남은시간이 0보다 크다면 extraTime이 0보다 클 때까지
			// total에 더해주기
			while (extraTime > 0) {
				total += addPrice;
				extraTime -= addTime;
			}
			// extraTime이 0보다 작아지면 총 금액을 넣어주기
			priceRes.push(total);
		}
	});

	// 배열의 최소값 return
	return Math.min(...priceRes);
}

function solution(passes, minutes) {
	let answer;
	return answer;
}

// 주차장에 주차를 하려한다. 주차권을 여러 종류 취급한다. 주차권은 기본 요금, 기본시간을 가지며
// 주차권을 구매하고 기본시간을 초과했을 때, 사용자에게 추가요금을 부여한다.
// 추가요금 : 추가 시간 간격에 의해 발생하는 추가 요금의 금액
// 예를 들어, minutes가 150분일 때, 첫번째 주차권은 기본요금 5000원에 추가요금 2000원이므로 총 금액은 7000원
// 두번째 주차권은 기본요금 3000원에 추가요금 18000원이므로 총 금액은 21000원이다.

// 가장 작은 적은 금액을 낼 수 있는 주차권의 금액을 반환

// 하나의 요소는 [ 기본 요금, 기본 시간, 추가 시간, 추가 요금 ]
solution(
	[
		[5000, 120, 20, 1000],
		[3000, 30, 20, 3000],
	],
	150
); // result: 7000

solution(
	[
		[24500, 1000, 1, 0],
		[7000, 10, 50, 3000],
		[9000, 60, 20, 2000],
	],
	180
); // result: 19000

solution(
	[
		[5000, 100, 1, 50],
		[8000, 200, 1, 25],
		[2500, 25, 1, 100],
	],
	10
);
//result: 2500
