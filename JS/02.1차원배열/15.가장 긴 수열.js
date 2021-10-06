function solution(nums) {
	let answer;
	let minus_cnt = 1;
	let plus_cnt = 1;
	let p_max = -2147000000;
	let m_max = -2147000000;
	for (let i = 1; i < nums.length; i++) {
		if (nums[i - 1] < nums[i]) {
			plus_cnt++;
		} else {
			p_max = Math.max(p_max, plus_cnt);
			plus_cnt = 1;
		}
		if (nums[i - 1] > nums[i]) {
			minus_cnt++;
		} else {
			m_max = Math.max(m_max, minus_cnt);
			minus_cnt = 1;
		}
		p_max = Math.max(p_max, plus_cnt);
		m_max = Math.max(m_max, minus_cnt);
		answer = Math.max(p_max, m_max);
	}

	return answer;
}

console.log(solution([5, 3, 6, 7, 9, 8, 5, 3, 1, 2]));
console.log(
	solution([1, 2, 3, 3, 4, 5, 6, 7, 7, 8, 9, 10, 11, 12, 13, 14, 15])
);
