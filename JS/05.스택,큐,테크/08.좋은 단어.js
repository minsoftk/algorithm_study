function solution(s, m) {
	// let answer = '';
	// let cnt = 0;
	// for (let i = 0; i < s.length; i++) {
	// 	for (let j = i + 1; j < s.length; j++) {
	// 		// j와 i의 차이가 m보다 작거나 같아야하고, s[i]번 문자열의 길이와 j번째 문자열의 길이가 같아야 한다.
	// 		if (j - i <= m && s[i].length === s[j].length) cnt++;
	// 	}
	// }
	// return cnt;
}
console.log(solution(['back', 'seen', 'big', 'good', 'size'], 2)); // 3
console.log(solution(['back', 'seen', 'good', 'size'], 2)); // 5

function solution2(s, m) {
	let answer = 0;
	let queue = Array(21).fill(0);
	for (let i = 0; i < s.length; i++) {
		let len = s[i].length;
		while (queue[len].length > 0 && i - queue[len][0] > m) {
			queue[len].shift();
		}
		answer += queue[len].length;
		queue[len].push(i);
	}
	return answer;
}
