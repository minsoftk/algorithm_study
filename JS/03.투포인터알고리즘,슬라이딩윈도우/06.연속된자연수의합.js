function solution(num) {
	let sum = 0,
		answer = 0;

	// arr 배열에 슬라이딩 윈도우할 i 입력
	let m = parseInt(num / 2) + 1;
	let arr = [];
	for (let i = 1; i <= m; i++) {
		arr[i] = i;
	}

	// 1번 부터 m 번까지 loop
	let left = 1;
	for (let right = 1; right <= m; right++) {
		sum += arr[right];
		while (sum > num) {
			sum -= arr[left++];
		}
		// sum과 num이 같다면 answer++
		if (sum === num) answer++;
	}
	return answer;
}

console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));

// function solution2(n) {
// 	let answer = 0;
// 	cnt = 1;
// 	n--;
// 	while (n > 0) {
// 		cnt++;
// 		n -= cnt;
// 		if (n % cnt == 0) answer++;
// 	}
// 	return answer;
// }
// console.log(solution2(45678));
