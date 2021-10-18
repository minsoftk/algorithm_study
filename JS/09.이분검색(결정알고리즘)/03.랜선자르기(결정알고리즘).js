// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(nums, m) {
	let answer;
	// 몇 개를 가질 수 있는가
	function count(len) {
		let cnt = 0;
		for (let x of nums) {
			cnt += parseInt(x / len);
		}
		return cnt;
	}

	// 이분 검색을 위한 left, right 값 설정. 찾고자 하는 값이 무엇인가? 최대 길이
	let left = 0,
		right;
	// right에는 최대 길이이므로 랜선 중 가장 큰 값으로 입력해준다.
	for (let x of nums) right = Math.max(right, x);

	// left가 right보다 커질때까지 반복한다.
	while (left <= right) {
		// 이분 검색을 위한 mid 값 설정. 길이를 구하고 있기에 값으로 설정된다.
		let mid = parseInt((left + right) / 2);

		// m 값은 랜선의 개수이다. count에서는 그러면 mid를 넣었을 때, m과 연관된 값을 return 해줘야 한다.
		// 문제에서 N개를 만들으라 했으므로 m보다 크거나 같아도 된다. 하지만 최대 길이가 아닐 수도 있다. 따라서 계속 탐색해줘야 한다.
		if (count(mid) >= m) {
			// 만약 return된 값이 m보다 크거나 같다면, 설정한 길이가 짧다는 의미. 그러면 왼쪽을 버린다.
			answer = mid; // 하지만 이미 조건을 만족하니 미리 저장해놓는다.
			left = mid + 1; // left쪽을 버린다! mid값 이후 index로 설정!
		} else {
			// count(mid) < m 인 경우라면, 개수가 m보다 적기 때문에 길이를 더 크게 자른 경우다. 오른쪽을 버린다.
			right = mid - 1;
		}
	}
	return answer;
}
console.log(solution([802, 743, 457, 539], 11)); // 200
