function solution(s, m) {
	let answer = 0;
	let hash = new Map();
	for (let x of m) {
		hash.set(x, (hash.get(x) || 0) - 1);
	}
	let len = m.length - 1;
	for (let i = 0; i < len; i++) {
		hash.set(s[i], (hash.get(s[i]) || 0) + 1);
		if (hash.get(s[i]) === 0) hash.delete(s[i]);
	}
	//현재 ba가 일치해서삭제된 상황
	// right idx가 들어갔을 때
	let left = 0;
	for (let right = len; right < s.length; right++) {
		hash.set(s[right], (hash.get(s[right]) || 0) + 1);
		if (hash.get(s[right]) === 0) hash.delete(s[right]);
		if (hash.size === 0) answer++;
		hash.set(s[left], (hash.get(s[left]) || 0) - 1);
		if (hash.get(s[left]) === 0) hash.delete(s[left]);
		left++;
	}
	return answer;
}

console.log(solution('bacacbcba', 'abc'));
console.log(solution('bacaAacba', 'abc'));
