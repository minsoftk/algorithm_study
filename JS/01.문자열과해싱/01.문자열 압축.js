function solution(str) {
	let answer = '';
	let cnt = 1;
	str = str + ' ';
	for (let i = 0; i < str.length - 1; i++) {
		if (str[i] === str[i + 1]) cnt++;
		else {
			answer += str[i];
			if (cnt > 1) answer += String(cnt);
			cnt = 1;
		}
	}
	return answer;
}
console.log(solution(KKHSSSSSSSE));

function solution(s) {
	let answer = '';
	let hash = new Map();
	for (x of s) {
		hash.set(x, (hash.get(x) || 0) + 1);
	}

	for (let [key, val] of hash) {
		answer += key;
		if (hash.get(key) !== 1) answer += hash.get(key);
	}
	return answer;
}

console.log(solution('KKHSSSSSSSE'));
