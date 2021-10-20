// 다이나믹은 복잡한 문제를 직관적으로 알 수 있을 정도로 작게 만들어서 bottom-up으로 해결 한다. (점화식)
function solution(s1, s2) {
	let answer = 0;
	let len1 = s1.length;
	let len2 = s2.length;
	let dy = Array.from(Array(1001), () => Array(1001).fill(0)); //i kg을 담았을 때 최대가치, dy[m]이 답이 된다 = 0.

	for (let i = 1; i <= len1; i++) {
		for (let j = 1; j <= len2; j++) {
			if (s1[i - 1] === s2[j - 1]) {
				dy[i][j] = dy[i - 1][j - 1] + 1;
			} else {
				dy[i][j] = Math.max(dy[i - 1][j], dy[i][j - 1]);
			}
		}
	}
	answer = dy[len1][len2];
	return answer;
}

console.log(solution('acbehf', 'abefc')); // 4
