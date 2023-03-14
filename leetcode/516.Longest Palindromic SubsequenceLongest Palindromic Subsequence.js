/**
 * @param {string} s
 * @return {number}
 */

const isPalindrome = (str) => {
	if (str.split('').reverse().join('') === str) return true;
	else return false;
};

const deletePalindrome = (s) => {
	let answer = true;
	let str = s.split('');
	let left = 0,
		right = s.length - 1;
	let flag = true;
	while (left <= right) {
		if (s[left] !== s[right]) {
			let temp = s.substring(left, right);
			let temp2 = s.substring(left + 1, right + 1);

			if (
				temp.split('').reverse().join('') !== temp &&
				temp2.split('').reverse().join('') !== temp2
			) {
				answer = false;
				break;
			}
		}
		left++;
		right--;
	}
};

var longestPalindromeSubseq = function (s) {
	const len = s.length;
	const dy = Array.from(Array(len), () => Array(len).fill(0));
	for (let i = 0; i < len; i++) dy[i][i] = 1;
	for (let i = 1; i < len; i++) dy[i - 1][i] = s[i - 1] === s[i] ? 2 : 1;

	for (let i = 2; i < len; i++) {
		for (let j = i; j < len; j++) {
			if (s[j - i] === s[j]) {
				dy[j - i][j] = dy[j - i + 1][j - 1] + 2;
			} else {
				dy[j - i][j] = Math.max(dy[j - i + 1][j], dy[j - i][j - 1]);
			}
		}
	}
	return dy[0][len - 1];
};

console.log(longestPalindromeSubseq('bbbab')); //4
