/**
 * @param {string[]} strs
 * @return {string[][]}
 */
// const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
// const strs = ['ac', 'c'];
// const strs = ['hhhhu', 'tttti', 'tttit', 'hhhuh', 'hhuhh', 'tittt'];
var groupAnagrams = function (strs) {
	let wordHash = new Map();
	for (let i = 0; i < strs.length; i++) {
		const key = strs[i].split('').sort().join('');
		let val = wordHash.get(key) || [];
		val.push(strs[i]);
		wordHash.set(key, val);
	}
	return [...wordHash.values()];

	// let answer = [];
	// let check = Array(strs.length).fill(0);

	// for (let i = 0; i < strs.length; i++) {
	// 	let wordHash = new Map();
	// 	check[i] = 1;
	// 	for (let char of strs[i]) {
	// 		wordHash.set(char, (wordHash.get(char) || 0) + 1);
	// 	}

	// 	let group = [];
	// 	group.push(strs[i]);
	// 	for (let j = i + 1; j < strs.length; j++) {
	// 		let flag = true;
	// 		let checkWord = new Map();
	// 		if (strs[i] === '') checkWord.set('', (checkWord.get('') || 0) + 1);
	// 		for (let char of strs[j]) {
	// 			checkWord.set(char, (checkWord.get(char) || 0) + 1);
	// 		}
	// 		// console.log(checkWord);
	// 		// console.log(wordHash.set('', 1));

	// 		for (let [key, val] of wordHash) {
	// 			if (!(checkWord.has(key) && checkWord.get(key) === wordHash.get(key))) {
	// 				flag = false;
	// 				break;
	// 			}
	// 		}

	// 		if (flag && check[j] === 0) {
	// 			group.push(strs[j]);
	// 			check[j] = 1;
	// 		}
	// 	}
	// 	answer.push(group);
	// }
	// return answer;
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
console.log(groupAnagrams(['', 'b']));
console.log(groupAnagrams(['ac', 'c']));
console.log(
	groupAnagrams(['hhhhu', 'tttti', 'tttit', 'hhhuh', 'hhuhh', 'tittt'])
);
console.log(groupAnagrams(['ddddddddddg', 'dgggggggggg']));
