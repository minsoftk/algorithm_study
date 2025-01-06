const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const [input] = require('fs').readFileSync(filePath).toString().trim().split('\n');

const N = input.length;
const res = [];
const set = new Set();
const visited = Array(N + 1).fill(false);
let ans = 0;

// Set에다가 문자열을 담아버리면 시간복잡도가 올라간다.
// 그냥 문자열: 문자열의 개수 객체를 만들어서 permutation에서 불필요한 상황은 보지 않도록 하는 것이 효율적이다.
// 백트래킹이란 답이 될 수 없는 것은 살펴보지 않음으로 효율적으로 답을 구하는 알고리즘이다.
function permutation(index, level) {
	if (level === N) {
		let flag = true;
		for (let i = 1; i < N - 1; i += 1) {
			if (res[i] === res[i - 1] || res[i] === res[i + 1]) {
				flag = false;
				break;
			}
		}
		if (flag) {
			set.add(res.join(''));
		}
	}

	for (let i = 0; i < N; i += 1) {
		if (visited[i]) continue;

		visited[i] = true;
		res.push(input[i]);
		permutation(i + 1, level + 1);
		visited[i] = false;
		res.pop();
	}
}

permutation(0, 0);
console.log(set.size);

console.log('B'.charCodeAt());
