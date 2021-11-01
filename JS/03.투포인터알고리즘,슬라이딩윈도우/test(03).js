function solution(s1, s2) {
	let answer = 0;
	let hash = new Map();
	let left = 0;
	for (let i = 0; i < s2.length; i++) {
		hash.set(s2[i], (hash.get(s2[i]) || 0) + 1);
	}

	for (let i = 0; i < s2.length - 1; i++) {
		hash.set(s1[i], (hash.get(s1[i]) || 0) - 1);
		if (hash.get(s1[i]) === 0) hash.delete(s1[i]);
	}

	for (let right = s2.length - 1; right < s1.length; right++) {
		hash.set(s1[right], (hash.get(s1[right]) || 0) - 1);
		if (hash.get(s1[right]) === 0) hash.delete(s1[right]);
		if (hash.size === 0) answer++;

		hash.set(s1[left], (hash.get(s1[left]) || 0) + 1);
		if (hash.get(s1[left]) === 0) hash.delete(s1[left]);

		left++;
	}

	if (hash.size === 3) answer++;
	return answer;
}

console.log(solution('bacacbcba', 'abc')); // 3
console.log(solution('bacaAacba', 'abc')); // 3
