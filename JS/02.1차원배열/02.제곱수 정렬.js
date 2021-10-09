function solution(s) {
	let answer;
	let left = 0,
		right = s.length - 1;
	let arr = Array(s.length).fill(0);
	let pos = s.length - 1;
	while (left <= right) {
		if (Math.abs(s[left]) > Math.abs(s[right])) {
			arr[pos] = s[left] * s[left];
			left++;
			pos--;
		} else if (Math.abs(s[left]) < Math.abs(s[right])) {
			arr[pos] = s[right] * s[right];
			right--;
			pos--;
		} else {
			arr[pos] = s[right] * s[right];
			right--;
			pos--;
		}
	}
	console.log(arr);
	return answer;
}

console.log(solution([-4, -1, 0, 3, 10]));
console.log(solution([-7, -3, 2, 3, 11]));
