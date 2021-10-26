const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');
let [v, e] = input[0].trim().split(' ').map(Number);
let edges = [];
for (let i = 1; i < input.length; i++) {
	edges.push(input[i].trim().split(' ').map(Number));
}

function solution(v, e, edges) {
	function Find(v) {
		if (v === check[v]) return v;
		else return (check[v] = Find(check[v]));
	}

	// 이 문제에서 Union 함수가 굳이 필요하진 않음! 하지만 format 외워놓기.
	function Union(a, b) {
		let fa = Find(a);
		let fb = Find(b);
		if (fa !== fb) {
			check[fa] = fb;
		}
	}

	let answer = 0;
	let check = Array(v + 1);
	for (let i = 0; i < check.length; i++) check[i] = i;
	edges.sort((a, b) => a[2] - b[2]);

	// 만약 집합 번호가 다를 경우, 최소 비용을 더해주고 집합 번호를 Union 해준다.
	for (let [a, b, c] of edges) {
		let fa = Find(a);
		let fb = Find(b);
		if (fa !== fb) {
			answer += c;
			check[fa] = fb;
		}
	}
	return answer;
}
console.log(solution(v, e, edges));
