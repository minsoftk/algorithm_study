function solution(s, t) {
	let answer;
	let hash = new Map();
	let right = 2;
	for (let x of t) {
		hash.set(x, (hash.get(x) || 0) - 1);
	}
	console.log(hash);
	let len = t.length - 1;
	for (let i = 0; i < len; i++) {
		hash.get(s[i], (hash.get(s[i]) || 0) + 1);
		if (hash.get(s[i] === 0)) hash.delete(s[i]);
	}
	let left = 0;
	for (let right = len; right < s.length; right++) {
		hash.set(s[right], (hash.get(s[right]) || 0) + 1);
		if (hash.get(s[right] === 0)) hash.delete(s[right]);
		if (hash.size === 0) answer++;
		hash.set(s[left], (hash.get(s[left]) || 0) - 1);
		if (hash.get(s[left] === 0)) hash.delete(s[left]);
		left++;
	}
	return answer;
}

console.log(solution('bacacbcba', 'abc'));
console.log(solution('bacaAacba', 'abc'));
