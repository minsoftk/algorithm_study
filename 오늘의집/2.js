function solution(str) {
	let hash = new Map();
	// hash에 모든 경우 다 때려박음
	for (let i = 0; i < str.length; i++) {
		for (let j = 1; j <= str.length - i; j++) {
			let temp = str.substr(i, j);
			hash.set(temp, (hash.get(temp) || 0) + 1);
		}
	}

	// 빈도수 높은 횟수
	let maxCnt = 0;
	for (let [key, val] of hash) {
		if (maxCnt < val) maxCnt = val;
	}

	// 빈도수와 가장 긴 문자열 같은 문자열 maxStr에 저장
	let maxStr = [];
	for (let [key, val] of hash) {
		if (val === maxCnt) maxStr.push(key);
	}

	// 가장 긴 문자열이 어차피 나머지 포함하므로 길이로 정렬
	let maxLength = 0;
	maxStr.sort((a, b) => b.length - a.length);
	maxLength = maxStr[0].length;

	let temp = '';
	for (let x of maxStr) {
		if (maxLength === x.length) {
			let regex = new RegExp(x, 'gi');
			str = str.replace(regex, '');
		}
	}

	return str;
}

console.log(solution('abcabcdefabc'));
console.log(solution('abxdeydeabz'));
