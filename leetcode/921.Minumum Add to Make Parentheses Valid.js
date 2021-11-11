/**
 * @param {string}
 * @return {number}
 */
var minAddToMakeValid = function (s) {
	let stack = [];
	let cnt = 0; // 올바른 괄호의 개수
	for (let i = 0; i < s.length; i++) {
		// ) 를 만났을 때, stack의 length가 0이라면 올바르지 않으므로 카운트 해준다.
		// 그 외엔 스택에서 빼준다.
		if (s[i] === ')') {
			if (stack.length === 0) cnt++;
			else stack.pop();
		} else stack.push(s[i]); // ')' 외의 경우엔 push를 해준다.
	}
	// 만약 stack에 값이 남아 있다면 '(' 경우만 있으므로 cnt에 더해준다.
	if (stack.length !== 0) cnt += stack.length;
	return cnt;
};
