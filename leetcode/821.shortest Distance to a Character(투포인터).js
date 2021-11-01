function solution(s, c) {
	let answer = [];
	let left = 0;
	let hash = new Map();
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) hash.set(i, 1);
	}
	console.log(hash);
	for (let right = 0; right < s.length; right++) {
		let temp = 1e9;
		if (hash.has(right)) {
			answer.push(0);
		} else {
			for (let [key, val] of hash) temp = Math.min(Math.abs(right - key), temp);
			answer.push(temp);
		}
	}
	return answer;
}

console.log(solution('loveleetcode', 'e')); // [3,2,1,0]
// console.log(solution('aaab', 'b')); // [3,2,1,0,1,0,0,1,2,2,1,0]
