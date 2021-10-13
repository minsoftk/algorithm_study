function solution(nums, m) {
	let answer;

	let arr = nums.sort((a, b) => b - a);
	let n = nums.length;
	let i = 0;
	let cnt = 0;
	while (n--) {
		// 다음 요소와 합이 sum보다 작다면 i++
		// 한명만 태우는 경우
		if (arr[i] + arr[i + 1] < m) {
			i = i + 2;
			cnt++;

			// 2명을 태우는 경우
		} else {
			i++;
			cnt++;
		}
		if (i > n) {
			answer = cnt;
			break;
		}
	}
	return answer;
}

console.log(solution([90, 50, 70, 100, 60], 140)); // 3
