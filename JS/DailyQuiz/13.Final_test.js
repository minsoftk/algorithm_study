// 1. 해시 정렬
let hash = new Map();
for (let x of arr) {
	if (hash.has(x)) {
		hash.set(x, hash.get(x) + 1);
	} else {
		hash.set(x, (hash.get(x) || 0) + 1);
	}
}

let temp = [...hash].sort((a, b) => b[0] - a[0]);
let str = '';
for (let i = 0; i < temp.length; i++) {
	for (let j = 0; j < temp[i][1]; j++) str += temp[i][0];
}
console.log('temp', temp);
console.log(str);

// 2.
function solution(nums) {
	let left = 0;
	let cnt = 0;
	for (let right = 0; right < nums.length; right++) {
		sum += nums[right];
		if (nums[right] === 0) cnt++;
		while (cnt > k) {
			if (arr[left] === 0) {
				cnt--;
			}
		}
	}
}
console.log(solution([1, 1, 0, 0, 1, 1, 0, 1, 1, 0, 1], 3)); // 2
