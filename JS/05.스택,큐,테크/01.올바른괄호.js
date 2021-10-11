function solution(s) {
	let stack = [];

	for (let i = 0; i < s.length; i++) {
		if (s[i] === '(') {
			stack.push(1);
		} else stack.pop();
	}
	if (stack.size === 0) return 'YES';
	else return 'NO';
}
console.log(solution('(()(()))(()')); // NO
