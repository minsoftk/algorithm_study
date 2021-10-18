function solution(n, times) {
	var answer = 0;
	let left = 0,
		right = 10e9;
	function Count(mid) {
		let cnt = 0;
		for (let i = 0; i < times.length; i++) {
			cnt += Math.floor(mid / times[i]);
		}
		return cnt;
	}
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		// 만약 n보다 크다면, 시간이 크게 잡혔다. 오른쪽을 버린다.
		if (Count(mid) >= n) {
			answer = mid;
			right = mid - 1;
		} else left = mid + 1;
	}

	return answer;
}
