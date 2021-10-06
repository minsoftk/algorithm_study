function solution(s, m) {
	let answer;
	for (let i = m; i > 0; i--) {
		for (let j = 1; j < s.length; j++) {
			s[j - 1] = s[j] - s[j - 1];
		}
	}
	s = s.slice(0, s.length - m);
	console.log(s);

	return answer;
}

console.log(solution([5, 3, 7, 9, -2], 1));
console.log(solution([5, 3, 7, 9, -2], 2));
