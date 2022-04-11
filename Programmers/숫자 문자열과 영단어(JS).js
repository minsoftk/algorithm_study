// function solution(str) {
// 	let answer;
// 	let numbers = [
// 		'zero',
// 		'one',
// 		'two',
// 		'three',
// 		'four',
// 		'five',
// 		'six',
// 		'seven',
// 		'eight',
// 		'nine',
// 		'ten',
// 	];
// 	for (let i = 0; i <= 9; i++) {
// 		let tmp = str.split(numbers[i]);
// 		console.log(tmp);
// 		str = tmp.join(i);
// 	}
// 	answer = parseInt(str);
// 	return answer;
// }

function solution(s) {
	const NUM = {
		zero: 0,
		one: 1,
		two: 2,
		three: 3,
		four: 4,
		five: 5,
		six: 6,
		seven: 7,
		eight: 8,
		nine: 9,
	};
	var answer = s;
	let changeStr = '';

	for (let i = 0; i < s.length; i++) {
		if (!(s[i].charCodeAt() >= 48 && s[i].charCodeAt() <= 57)) {
			changeStr += s[i];
			if (NUM[changeStr]) {
				let regex = new RegExp(changeStr, 'g');
				answer = answer.replace(regex, NUM[changeStr]);
				changeStr = '';
			}
		}
	}

	return answer;
}

console.log(solution('one4seseveneight'));
console.log(solution('23four5sixoneone7'));
console.log(solution('2three45sixseven'));
