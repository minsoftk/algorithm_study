```js
function solution(str) {
	let answer;
	let numbers = [
		'zero',
		'one',
		'two',
		'three',
		'four',
		'five',
		'six',
		'seven',
		'eight',
		'nine',
		'ten',
	];
	for (let i = 0; i <= 9; i++) {
		let tmp = str.split(numbers[i]);
		console.log(tmp);
		str = tmp.join(i);
	}
	answer = parseInt(str);
	return answer;
}
console.log(solution('23four5sixoneone7'));
```
