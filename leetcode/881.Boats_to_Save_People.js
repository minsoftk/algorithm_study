function sol(people, limit) {
	let left = 0,
		right = people.length - 1,
		answer = 0;
	people.sort((a, b) => a - b);

	while (left <= right) {
		answer++;
		if (people[left] + people[right] <= limit) {
			left++;
		}
		right--;
	}
	return answer;
}

console.log(sol([1, 2], 3));
console.log(sol([3, 5, 3, 4], 5));
