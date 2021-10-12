function solution(s) {
	let answer = [s[0]];

	for (let i = 1; i < s.length; i++) {
		let top = answer[answer.length - 1];
		if (s[i] === top) answer.pop();
		else answer.push(s[i]);
	}
	return answer;
}
console.log(solution('acbbcaa')); // a
console.log(solution('bacccaba')); // bacaba
