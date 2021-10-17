function solution(n, r) {
	let answer = [];
	let store = Array.from(Array(35), () => Array(35).fill(0));
	let p = [],
		b = [];
	let flag = 0;
	function combi(n, r) {
		if (store[n][r] > 0) return store[n][r];
		if (n === r || r === 0) return 1;
		else return (store[n][r] = DFS(n - 1, r - 1) + DFS(n - 1, r));
	}
	function DFS(L, sum) {
		if (flag) return; // flag가 true면 재귀를 돌리지 않는다.
		if (L === n) {
			if (sum === r) {
				answer = p.slice();
				flag = 1;
			}
		} else {
			for (let i = 0; i <= n; i++) {
				if (ch[i] === 0) {
					ch[i] = 1;
					p.push(i);
					DFS(L + 1, sum + b[L] * p[L]); // p[L]로 해도 된다.
					ch[i] = 0;
					p.pop();
				}
			}
		}
	}
	answer = DFS(n, r);
	return answer;
}

// console.log(solution(30, 20));

console.log(solution(4, 16)); // [3, 1, 2, 4]
console.log(solution(5, 50)); // [1, 2, 4, 3, 5]
