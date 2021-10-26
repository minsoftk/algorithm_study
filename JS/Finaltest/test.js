function solution(s) {
	let answer = '';

	let hash = new Map();
	for (let i = 0; i < s.length; i++) {
		hash.set(s[i], (hash.get(s[i]) || 0) + 1);
	}
	// let temp = [...hash].sort((a, b) => {
	// 	let temp = a[0].toLowerCase();
	// 	let temp2 = b[0].toLowerCase();
	// 	if (temp < temp2) return temp2 - temp;
	// 	if (temp)
	// 	return 0;
	// });

	let temp = [...hash].sort((a, b) => {
		return (
			(a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0) ||
			(a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)
		);
	});
	console.log(temp);

	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < temp[i][1]; j++) {
			answer += temp[i][0];
		}
	}
	return answer;
}
