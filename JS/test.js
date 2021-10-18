function solution(nums) {
	const check = new Array(nums.length).fill(0);
	let min = Number.MAX_SAFE_INTEGER;
	function dfs(L, K) {
		if (L === halfN) {
			// 스타트팀에 nums.length/2 명이 뽑혔다면
			const sTeam = [];
			const lTeam = [];

			let sSum = (lSum = 0);
			for (let i = 0; i < nums.length; i++) {
				if (check[i]) sTeam.push(i);
				// 체크 배열은 스타트 팀에 넣어주고, 체크 배열에 없으면 링크 팀에 넣어준다.
				else lTeam.push(i);
			}

			for (let i = 0; i < halfN; i++) {
				sSum += nums[sTeam[i]][0];
				lSum += nums[lTeam[i]][0];
			}
			min = Math.min(min, Math.abs(sSum - lSum));

			for (let i = 0; i < halfN; i++) {
				sSum += nums[sTeam[i]][1];
				lSum += nums[lTeam[i]][1];
			}
			min = Math.min(min, Math.abs(sSum - lSum));

			return;
		}

		for (let i = K; i < nums.length; i++) {
			// 체크 배열을 스타트 팀 구성에 사용한다.
			check[i] = 1;
			dfs(L + 1, i + 1);
			check[i] = 0;
		}
	}

	let halfN = parseInt(nums.length / 2);
	dfs(0, 0);
	return min;
}

console.log(
	solution([
		[87, 84],
		[66, 78],
		[94, 94],
		[93, 87],
		[72, 92],
		[78, 63],
	])
); // 2
