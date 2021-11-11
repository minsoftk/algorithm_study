function sol(nums1, nums2) {
	let temp = [];
	let answer = 0;
	let left = 0,
		right = 0;
	let len = nums1.length + nums2.length;
	for (let i = 0; i < len; i++) {
		if (nums1[left] < nums2[right]) {
			temp.push(nums1[left++]);
		} else if (nums1[left] > nums2[right]) {
			temp.push(nums2[right++]);
		} else {
			if (left < nums1.length) temp.push(nums1[left++]);
			else temp.push(nums2[right++]);
		}
	}
	console.log(temp);
	if (temp.length % 2 === 0) {
		answer = (temp[temp.length / 2 - 1] + temp[temp.length / 2]) / 2;
	} else {
		answer = temp[Math.floor(temp.length / 2)];
	}
	return answer;
}

console.log(sol([1, 3], [2, 7]));
console.log(sol([1, 2], [3, 4]));
