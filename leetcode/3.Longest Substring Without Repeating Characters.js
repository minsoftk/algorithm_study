function sol(s) {
	let answer = 0;
	let hash = new Map();

	if (s.length === 1) return 1;
	for (let i = 0; i < s.length - 1; i++) {
		hash.set(s[i], 1);
		for (let j = i + 1; j < s.length; j++) {
			if (hash.has(s[j])) {
				answer = Math.max(answer, hash.size);
				break;
			} else {
				hash.set(s[j], 1);
				answer = Math.max(answer, hash.size);
			}
		}
		for (let [key, val] of hash) hash.delete(key);
	}
	return answer;
}

// console.log(sol('pwwkew'));
// console.log(sol('bbbbbb'));
// console.log(sol(' '));
// console.log(sol('anviaj'));

function sol2(s) {
	let answer = 0;
	let temp = '';

	for (let i = 0; i < s.length; i++) {
		let char = s[i];
		if (temp.includes(char)) {
			let idx = temp.indexOf(char);
			temp = temp.slice(idx + 1);
		}
		temp += char;
		answer = Math.max(temp.length, answer);
	}
	return answer;
}
console.log(sol('pwwkew'));
