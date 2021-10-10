function solution(s, m) {
	let answer;
	let arr = Array(1000).fill(0);
	let max = -2147000000;
	let min = 2147000000;
	for (let i = 0; i < s.length; i++) {
		if (max < s[i]) max = s[i];
		if (min > s[i]) min = s[i];
	}

	for (let i = 0; i <= max; i++) {
		arr[s[i]] += 1;
	}

	for (let i = m; i > 0; i--) {
		if (min === max) return 0;
		if (arr[max] === 1) {
			arr[max]--;
			max--;
			arr[max]++;
		} else {
			arr[max]--;
			arr[max - 1]++;
		}
		if (arr[min] === 1) {
			arr[min]--;
			min++;
			arr[min]++;
		} else {
			arr[min]--;
			arr[min + 1]++;
		}
	}

	return max - min;
}

console.log(solution([2, 1, 3, 7, 5], 2));
console.log(solution([69, 42, 68, 76, 40, 87, 14, 65, 76, 81], 50));
