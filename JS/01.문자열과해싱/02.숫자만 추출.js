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
