```js
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
```

```js
let answer = 'YES';
str = str.toLowerCase();
if (str.split('').reverse().join('') != str) return 'NO';
return answer;
```
