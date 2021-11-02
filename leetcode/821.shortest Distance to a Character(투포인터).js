// function solution(s, c) {
// 	let answer = [];
// 	let left = 0;
// 	let hash = new Map();
// 	for (let i = 0; i < s.length; i++) {
// 		if (s[i] === c) hash.set(i, 1);
// 	}
// 	console.log(hash);
// 	for (let right = 0; right < s.length; right++) {
// 		let temp = 1e9;
// 		if (hash.has(right)) {
// 			answer.push(0);
// 		} else {
// 			for (let [key, val] of hash) temp = Math.min(Math.abs(right - key), temp);
// 			answer.push(temp);
// 		}
// 	}
// 	return answer;
// }

function solution(s, c) {
	let answer = Array(s.length).fill(Infinity);
	let num = Infinity;
	for (let i = 0; i < s.length; i++) {
		if (s[i] === c) num = 0;
		answer[i] = Math.min(answer[i], num);
		num++;
	}

	num = Infinity;
	for (let i = s.length - 1; i >= 0; i--) {
		if (s[i] === c) num = 0;
		answer[i] = Math.min(answer[i], num++);
	}

	return answer;
}

console.log(solution('loveleetcode', 'e')); // [3,2,1,0,1,0,0,1,2,2,1,0]
// console.log(solution('aaab', 'b')); // [3,2,1,0,1,0,0,1,2,2,1,0]
