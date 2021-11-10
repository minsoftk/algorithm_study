// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(stable, m) {
	function count(mid, stable) {
		let cnt = 1,
			pos = stable[0]; //pos는 배치한 말의 위치
		for (i = 1; i < stable.length; i++) {
			// 말의 간격이 mid보다 크다면 cnt++을 해준다.
			// 만약 cnt가 m보다 작다면 mid 값으론 말을 위치할 수 없다.
			if (stable[i] - pos >= mid) {
				cnt++;
				pos = stable[i];
			}
		}
		return cnt;
	}

	let answer = 0;
	stable.sort((a, b) => a - b);
	let left = 1,
		right = stable[stable.length - 1];
	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		// 말을 놓을 수 있는 위치 개수를 return 받는다. m보다 작다면 mid가 너무 크기 때문이다.
		if (count(mid, stable) >= m) {
			answer = mid;
			left = mid + 1;
		} else {
			right = mid - 1;
		}
	}
	return answer;
}
console.log(solution([1, 2, 8, 4, 9], 3)); // 3
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8)); // 10
