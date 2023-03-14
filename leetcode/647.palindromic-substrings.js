/**
 * @param {string} s
 * @return {number}
 */

const isPalindrome = (str) => {
	if (str.split('').reverse().join('') === str) return true;
	else return false;
};

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function (s) {
	let checkPalindrome = Array(s.length);
	for (let i = 0; i < checkPalindrome.length; i++)
		checkPalindrome[i] = Array(s.length).fill(0);
	for (let i = 0; i < checkPalindrome.length; i++) {
		for (let j = 0; j < checkPalindrome[0].length; j++) {
			if (i === j) checkPalindrome[i][i] = 1;
		}
	}
	console.log(checkPalindrome);
	for (let i = 0; i < checkPalindrome.length; i++) {}
};

console.log(countSubstrings('ababa')); // 6
