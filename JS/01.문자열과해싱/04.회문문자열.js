function solution(str) {
	str = str.toLowerCase();
	let flag = true;
	for (let i = 0; i < str.length / 2; i++) {
		if (str[i] === str[str.length - i - 1]) continue;
		else flag = false;
	}
	if (!flag) return 'NO';
	else return 'YES';
}
console.log(solution('GgooGg'));

function solution2(s) {
	let answer = 'YES';
	s = s.toLowerCase();
	let temp = s.split('').reverse().join('');
	if (s !== temp) answer = 'NO';
	return answer;
}

console.log(solution('gooG')); // YES
