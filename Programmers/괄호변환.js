function solution(p) {
	// 1 이면 올바른 괄호
	// 0 이면 균형잡힌 괄호
	let conFlag = checkCorrect(p);
	if (conFlag === 1) return p;
	let cnt = 1;

	p = makeCorrect(p);

	return p;
}

function makeCorrect(s) {
	if (s === '') return '';
	let i = loactionCorrect(s);
	let u = s.substring(0, i);
	let v = s.substring(i, s.length);
	if (checkCorrect(u)) {
		return (u += makeCorrect(v));
	} else {
		let temp = '(' + makeCorrect(v);
		temp += ')';
		let temp_u = '';
		for (let x = 1; x < u.length - 1; x++) {
			if (u[x] === '(') temp_u += ')';
			else temp_u += '(';
		}
		temp += temp_u;
		return temp;
	}
}

function loactionCorrect(s) {
	let i = 1,
		cnt = s[0] === '(' ? 1 : -1;
	// 올바른 괄호 위치 찾기
	while (i < s.length) {
		if (cnt === 0) break;
		if (s[i] === ')') cnt -= 1;
		else cnt += 1;

		i += 1;
	}
	return i;
}

function checkBalance(s) {
	let cnt = 0;
	for (let ch of s) {
		if (ch === ')') {
			cnt -= 1;
		} else {
			cnt += 1;
		}
	}
	if (cnt === 0) return 1;
	else return 0;
}

function checkCorrect(s) {
	let stack = [];
	let cnt = 0;
	for (let ch of s) {
		if (ch === ')') {
			if (stack.length === 0) return 0;
			stack.pop();
			cnt -= 1;
		} else {
			stack.push(ch);
			cnt += 1;
		}
	}
	if (stack.length === 0 && cnt === 0) return 1;
	else return 0;
}

// console.log(solution('(()())()')); //"(()())()"
// console.log(solution(')('));
console.log(solution('()))((()'));
