function solution(num) {
	let arr = [];
	let left = 0,
		right = 0;
	let sum = 0;
	let answer = 0;
	let m = parseInt(num / 2) + 1;
	for (let i = 1; i <= num / 2; i++) {
		arr[i] = i;
	}
	for (right = 0; right < m; right++) {
		sum += arr[right];
		while (sum > num) {
			sun -= arr[left++];
		}
		if (sum === num) answer++;
	}
	console.log(arr);
	return answer;
}

console.log(solution(15));
console.log(solution(45678));
console.log(solution(98765));

function solution2(n) {
	let answer = 0;
	cnt = 1;
	n--;
	while (n > 0) {
		cnt++;
		n -= cnt;
		if (n % cnt == 0) answer++;
	}
	return answer;
}
console.log(solution2(45678));
