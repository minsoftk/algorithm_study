function solution(money, cost) {
	let answer = 0;
	let sum = 0;
	let max = -2147000000;
	let left = 0;
	for (let right = 0; right < cost.length; right++) {
		sum += cost[right];
		while (sum > money) {
			sum -= cost[left++];
		}
		answer = Math.max(answer, right - left + 1);
	}
	return answer;
}

console.log(solution(420, [0, 900, 0, 200, 150, 0, 30, 50])); //420 5
console.log(solution(100, [245, 317, 151, 192])); //100 0
