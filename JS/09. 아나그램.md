```js
function solution(str1, str2) {
	let answer = 'YES';
	let temp;
	let hash = new Map();
	let hash2 = new Map();

	for (let i = 0; i < str1.length; i++) {
		hash.set(str1[i], (hash.get(str1[i]) || 0) + 1);
	}
	for (let i = 0; i < str2.length; i++) {
		hash2.set(str2[i], (hash2.get(str2[i]) || 0) + 1);
	}

	for (let [key, val] of hash) {
		if (hash2.has(key)) {
			if (val === hash2.get(key)) {
				continue;
			} else {
				answer = 'NO';
				break;
			}
		}
	}
	return answer;
}
```
