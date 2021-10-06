```js
function solution(arr) {
	let answer = 'YES';
	let n = nums.length;
	let i = 0;
	while (i + 1 < n && nums[i] < num[i + 1]) i++;
	if (i === 0 || i === n - 1) answer = 'NO';
	while (i + 1 < n && nums[i] > nums[i + 1]) i++;
	if (i !== n - 1) answer = 'NO';
	return answer;
}

console.log(solution([5, 2, 4, 7, 7, 3, 9, 10, 11]));
```
