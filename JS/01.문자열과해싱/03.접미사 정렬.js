let answer = [];
for (let i = 0; i < s.length; i++) {
	answer.push(s.substring(i, s.length));
}
answer.sort((a, b) => a - b);
return answer;

// 2번째 풀이
function solution2(s) {
	let answer = [];
	let str = '';

	for (let i = s.length - 1; i >= 0; i--) {
		str = s[i] + str;

		answer.push(str);
		answer = answer.sort();
	}
	return answer;
}

console.log(solution('kseaedu')); //["aedu", "du", "eaedu", "edu", "kseaedu", "seaedu", "u"]
