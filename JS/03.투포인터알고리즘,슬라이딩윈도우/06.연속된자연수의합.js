function solution(num) {
	let sum = 0,
		answer = 0,
		len = 0;

	// 나누기를 했을때 소수점 없애기 위해 parseInt를 사용.
	len = parseInt(num / 2) + 1;
	let arr = [];

	// 1번 idx부터 1을 입력해준다.
	for (let i = 1; i <= len; i++) {
		arr[i] = i;
	}

	// 1부터 시작
	let left = 1;
	for (let right = 1; right <= len; right++) {
		sum += arr[right];

		// 만약 sum이 num보다 커졌을때 left값 빼주고 인덱스 증가시킨다.
		while (sum > num) {
			sum -= arr[left++];
		}

		// num과 sum이 같다면 answer++
		if (sum === num) {
			answer++;
		}
	}

	return answer;
}

console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));

function solution2(n) {
	let answer = 0;

	// 1부터 시작한다. cnt = 1
	cnt = 1;
	// 1부터 시작하기에 N에서 1을 먼저 빼준다.
	n--;

	// n이 0보다 클때만
	while (n > 0) {
		// cnt가 2부터 시작한다.
		cnt++;

		// 이미 1은 빼져 있는 상태
		// 따라서 cnt = 2인 경우, n에서 cnt를 빼준다.
		n -= cnt;
		// 나누어 떨어진다면 1, 2가 N-(1+2)를 나눠가질 수 있다.
		if (n % cnt == 0) answer++;
	}
	return answer;
}
console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));
