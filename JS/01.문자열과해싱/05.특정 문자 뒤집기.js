function solution(str) {
	str = str.split('');
	const isAlpha = /[a-zA-Z]/;
	let left = 0,
		right = str.length - 1;
	while (left < right) {
		if (!isAlpha.test(str[left])) left++;
		if (!isAlpha.test(str[right])) right--;
		if (isAlpha.test(str[left]) && isAlpha.test(str[right])) {
			let temp = str[left];
			str[left] = str[right];
			str[right] = temp;
			left++;
			right--;
		}
	}
	return str.join('');
}
console.log(solution('a#b!GE*T@S'));

function solution2(str) {
	const isAlpha = /[a-zA-Z]/;
	str = str.split('');
	console.log(str);
	let left = 0,
		right = str.length - 1;
	while (left < right) {
		if (!isAlpha.test(str[left])) {
			left++;
		} else if (!isAlpha.test(str[right])) {
			right--;
		} else {
			let temp = str[left];
			str[left] = str[right];
			str[right] = temp;
			left++;
			right--;
		}
	}
	return str.join('');
}
console.log(solution('a#b!GE*T@S'));
