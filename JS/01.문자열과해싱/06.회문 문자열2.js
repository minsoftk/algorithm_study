function solution(s) {
	let answer = 'YES';
	let str = s.split('');
	let left = 0,
		right = s.length - 1;
	let flag = true;
	while (left <= right) {
		if (s[left] !== s[right]) {
			let temp = s.substring(left, right);
			let temp2 = s.substring(left + 1, right + 1);

			if (
				temp.split('').reverse().join('') !== temp &&
				temp2.split('').reverse().join('') !== temp2
			) {
				answer = 'NO';
				break;
			}
		}
		left++;
		right--;
	}
	return answer;
}

console.log(solution('abcbdcba')); // YES
console.log(solution('abcabbakcba')); // YES
console.log(solution('abcacbakcba')); // NO
