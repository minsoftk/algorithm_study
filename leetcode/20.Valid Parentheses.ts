function isValid(s: string): boolean {
	if (s.length % 2 !== 0) return false;

	let stack: string[] = [];
	const len = s.length;

	for (let i = 0; i < len; i += 1) {
		if (s[i] === '(' || s[i] === '[' || s[i] === '{') stack.push(s[i]);
		else {
			// s[i]가 } ) ] 인 경우
			const pop = stack.pop();
			if (s[i] === '}' && pop === '{') continue;
			else if (s[i] === ']' && pop === '[') continue;
			else if (s[i] === ')' && pop === '(') continue;
			else return false;
		}
	}
	if (stack.length !== 0) return false;
	return true;
}
// console.log('🚀 ~ answer:', isValid('([)]'));
// console.log('🚀 ~ answer:', isValid('((([[[{{{}}}]]])))'));
// console.log('🚀 ~ answer:', isValid('()[]{}'));
// console.log('🚀 ~ answer:', isValid('([}}])'));
// console.log('🚀 ~ answer:', isValid('[({])}'));
