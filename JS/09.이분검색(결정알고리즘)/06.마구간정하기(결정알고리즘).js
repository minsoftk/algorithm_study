// 자료는 정렬되어 있어야 한다.
// 절반으로 쪼개지기 때문에 log n이다.
function solution(songs, m) {
	function count(mid) {
		let sum = 0;
		let cnt = 1;
		for (let x of songs) {
			if (sum + x > mid) {
				sum = x;
				cnt++;
			} else sum += x;
		}
		return cnt;
	}

	let answer = Number.MAX_SAFE_INTEGER;
	let left = 1, // 노래를 쪼개면 안되기 때문에 left는 songs의 max 값으로 잡아준다.
		right = 0;
	for (let x of songs) right += x;
	while (left <= right) {
		let mid = Math.floor((left + right) / 2);
		if (count(mid) <= m) {
			answer = mid;
			right = mid - 1;
		} else {
			left = mid + 1;
		}
	}
	return answer;
}
console.log(solution([1, 2, 8, 4, 9], 30)); // 3
console.log(solution([1, 3, 6, 11, 18, 27, 38, 41, 56, 73, 92, 113], 8)); // 10
