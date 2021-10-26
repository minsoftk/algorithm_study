const fs = require('fs');
const filePath =
	process.platform === 'linux' ? '/dev/stdin' : './boj/input.txt';
let input = fs.readFileSync(filePath).toString().trim().split('\n');

let n = Number(input[0].trim());
let m = Number(input[1].trim());

let edges = [];

for (let i = 2; i < input.length; i++) {
	edges.push(input[i].trim().split(' ').map(Number));
}

function solution(n, m, edges) {
	function Find(v) {
		if (v === check[v]) return v;
		else return (check[v] = Find(check[v]));
	}
	// 마찬가지로 Union이 꼭 필요
	function Union(a, b) {
		let fa = Find(a);
		let fb = Find(b);
		if (fa !== fb) {
			check[fa] = fb;
		}
	}

	let answer = 0;
	let check = Array(n + 1);
	for (let i = 0; i < n; i++) check[i] = i;
	edges.sort((a, b) => a[2] - b[2]);

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
console.log(solution(n, m, edges));
