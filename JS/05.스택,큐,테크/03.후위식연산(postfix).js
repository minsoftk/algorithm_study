function solution(s) {
	let answer = 0;
	let reg = /[^0-9]/;
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		// s[i]가 숫자가 아니라면
		if (!reg.test(s[i])) {
			stack.push(parseInt(s[i]));
		} else {
			let a = 0,
				b = 0;
			b = stack.pop();
			a = stack.pop();
			if (s[i] === '*') {
				stack.push(a * b);
			} else if (s[i] === '/') {
				stack.push(a / b);
			} else if (s[i] === '+') {
				stack.push(a + b);
			} else {
				stack.push(a - b);
			}
		}
	}
	return stack.pop();
}
console.log(solution('352+*9-')); // 12
