// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(nums, m) {
	let answer;

	function count(mid) {
		// 인출을 하고 시작하므로 1로 설정해준다.
		let cnt = 1;
		let sum = mid; // 만약에 mid값으로 설정했을 때. 총 인출액이 mid 일때

		// nums배열만큼 실행한다.
		for (let i = 0; i < nums; i++) {
			// 만약 가진 돈보다 지출 금액이 더 많다면
			// 남은 금액은 통장에 집어넣지만 카운트할 필요가 없다, 새로 mid 값으로 인출을 하고 인출 횟수를 올려준다.
			if (sum < nums[i]) {
				sum = mid;
				cnt++;
			}
			// 인출한 금액에서 nums 인출 계획을 계속 빼준다.
			sum -= nums[i];
		}
		// 총 인출 횟수를 return 해준다.
		return cnt;
	}

	let left = 1,
		right = 0;

	// 인출할 수 있는 최대값을 구해야 되므로, 총 금액으로 설정해준다.
	for (let x of nums) right += x;
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		// count(mid)의 반환값은 인출 횟수 m을 계산해야 된다.
		if (count(mid) <= m) {
			// cnt 값이 m보다 작거나 같으면, 인출 금액이 너무 클 수도 답일수도 있다.
			// 따라서 미리 저장해놓고, 오른쪽을 버린다.
			answer = mid;
			right = mid - 1;
		} else {
			// 그게 아니라면 왼쪽을 버린다.
			left = mid + 1;
		}
	}
	return answer;
}
console.log(solution([200, 300, 200, 200, 300, 100, 300], 3)); // 700
