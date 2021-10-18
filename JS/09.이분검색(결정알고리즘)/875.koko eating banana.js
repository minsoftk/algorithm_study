/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
var minEatingSpeed = function (piles, h) {
	let left = 1,
		right = 10e9;
	let k;

	piles.sort((a, b) => a - b);
	let total = 0;
	for (let x of piles) total += x;

	function Count(mid) {
		let cnt = 0;
		for (let i = 0; i < piles.length; i++) {
			cnt += Math.ceil(piles[i] / mid);
		}
		return cnt;
	}

	while (left <= right) {
		let mid = parseInt((left + right) / 2);
		if (Count(mid) <= h) {
			answer = mid;
			right = mid - 1;
		} else left = mid + 1;
	}
	return answer;
};
