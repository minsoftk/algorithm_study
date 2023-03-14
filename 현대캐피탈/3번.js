function solution(k, n, stats) {
	let check = Array(stats.length).fill(0);
	let team = [];
	let maxStatus = 0;

	chooseCharacter(0, 0);
	return maxStatus;

	// k 개의 분대원을 고르고
	// 가장 높은 잠재능력치를 구한 뒤, maxStatus보다 크다면 최신화
	function chooseCharacter(L, idx) {
		if (team.length === k) {
			let teamMaxStatus = calcMaxStatus(team);
			if (maxStatus < teamMaxStatus) maxStatus = teamMaxStatus;

			return;
		} else {
			for (let i = idx; i < stats.length; i++) {
				if (check[i] === 0) {
					check[i] = 1;
					team.push(i);
					chooseCharacter(L + 1, i + 1);
					check[i] = 0;
					team.pop();
				}
			}
		}
	}

	// k명의 분대원들에게 물약을 먹였을 때의 최대 능력치 값을 return
	function calcMaxStatus(tempArr) {
		let maxHideAbilityIdx = 0;
		let maxHideAbilityVal = 0;

		// 가장 잠재능력치가 높은 캐릭터의 idx를 구해주고 val 최신화하면서 비교
		for (let idx of tempArr) {
			if (maxHideAbilityVal < stats[idx][1]) {
				maxHideAbilityVal = stats[idx][1];
				maxHideAbilityIdx = idx;
			}
		}

		let total = 0;
		for (let idx of tempArr) {
			// idx가 잠재능력치가 높은 캐릭터에게 물약 다 먹여주기
			if (idx === maxHideAbilityIdx) {
				total += stats[idx][0] + n * stats[idx][1];

				// 아닐 경우 기본 능력치 더해주기
			} else total += stats[idx][0];
		}
		return total;
	}
}

function solution(k, n, stats) {
	let answer;
	return answer;
}

// 게임에서 전투력이 높은 분대를 만드려고 한다. 분대는 k개의 캐릭터를 포함하는 것이 가능하다.
// 물약으로 분대원의 전투력을 향상 시킬 수 있다. n 개의 물약이 주어진다. stats는 분대원의 능력치를 의미한다.
// stats = [기본능력치, 잠재능력치]
// 캐릭터의 최종 능력치는 기본능력치 + 물약 복용 횟수 * 잠재 능력치 이다.
// 예를 들어 [0,3]의 물약 3개를 먹은 분대원의 능력치는 0 + 3(물약) * 3 = 9이다.
// 분대 전투력은 모든 캐릭터의 최종 능력치의 합이다.
// 가장 높은 분대 전투력을 가지도록 분대를 만들고, 가장 높은 전투력을 반환하자.
k = 2;
n = 3;
stats = [
	[0, 3], // 1번 분대원
	[2, 2], // 2번 분대원
	[6, 1], // 3번 분대원
];

// 위와 같은 경우, k명을 고른다. 1번 분대원에게 물약을 3번 주었을 때, 1번 분대원의 능력치는 9이다.
// 1,2번을 선택했을 때, 총 분대 전투력은 9 + 2 = 11 이다.
// 1,3번을 선택했을 때, 총 분대 전투력은 9 + 6 = 15 이다.

solution(k, n, stats); // 15

solution(2, 2, [
	[1, 5],
	[1, 5],
]); // 12

solution(2, 2, [
	[0, 4],
	[0, 3],
	[5, 1],
]); // 13

solution(3, 0, [
	[9, 1],
	[8, 2],
	[7, 3],
	[7, 10],
]); // 24
