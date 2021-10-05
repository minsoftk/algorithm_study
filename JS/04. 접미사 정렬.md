```js
let answer = [];
for (let i = 0; i < s.length; i++) {
	answer.push(s.substring(i, s.length));
}
answer.sort((a, b) => a - b);
return answer;
```
