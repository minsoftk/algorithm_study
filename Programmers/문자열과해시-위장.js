function solution(clothes) {
	var answer = 0;
	let hash = new Map();
	for (let i = 0; i < clothes.length; i++) {
		// 같은 의상은 존재하지 않으므로 중복을 신경 써주지 않아도 된다.
		hash.set(clothes[i][1], (hash.get(clothes[i][1]) || 0) + 1);
	}

	let temp = 1;
	for (let [key, val] of hash) {
		temp *= val + 1;
	}
	answer = temp;
	return answer - 1;
}

console.log(
	solution([
		['yellowhat', 'headgear'],
		['bluesunglasses', 'eyewear'],
		['green_turban', 'headgear'],
	])
); // 5
console.log(
	solution([
		['crowmask', 'face'],
		['bluesunglasses', 'face'],
		['smoky_makeup', 'face'],
	])
); // 3
