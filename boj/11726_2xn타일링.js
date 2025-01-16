const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(n) {
	const dp = Array(n + 1).fill(0);
	[dp[1], dp[2]] = [1, 2];

	for (let i = 3; i <= n; i += 1) {
		dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
	}

	return dp[n];
}

console.log(solution(+input)); // 2


// top-down
function solution2(n) {
	const dp = Array(n + 1).fill(-1);
  [dp[1], dp[2]] = [1, 2];

	function recursive(n){
    if (n === 1 || n=== 2)return n;
    if (dp[n] !== -1) return dp[n];
    
    return dp[n] = (recursive(n - 1) + recursive(n - 2)) % 10007;
  }

  recursive(n)
	return dp[n];
}

console.log(solution2(+input)); // 2