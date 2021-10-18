function solution(str) {
	let answer = '';
	for (let x of str) {
		if (!isNaN(x)) answer += x;
	}
	return pasrseInt(answer);
}
console.log(solution('tge0a1h205er'));

function solution2(str) {
	let amswer = str.replace(/[^0-9]/g, ' ');
	return pasrseInt(answer);
}
console.log(solution('tge0a1h205er'));

function solution3(s) {
	let answer = '';
	let reg = /[0-9]/;

	for (let x of s) {
		if (reg.test(x) === true) {
			answer += x;
		}
	}
	answer = Number(answer);
	return answer;
}

console.log(solution('tge0a1h205er'));
console.log(solution('g0en2T0s8eSoft'));
