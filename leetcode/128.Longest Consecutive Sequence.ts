function longestConsecutive(nums: number[]): number {
	if (nums.length === 0) return 0;

	let longest = 0;
	let set = new Set<number>(nums);

	for (let num of set) {
		let length = 1;
		if (!set.has(num - 1)) {
			while (set.has(num + length)) {
				length += 1;
			}
		}
		longest = Math.max(longest, length);
	}

	return longest;
}

console.log('🚀 ~ longestConsecutive ~ longestConsecutive:', longestConsecutive([100, 4, 200, 1, 3, 2])); //4
console.log('🚀 ~ longestConsecutive ~ longestConsecutive:', longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1])); //9
console.log('🚀 ~ longestConsecutive ~ longestConsecutive:', longestConsecutive([0, -1])); //2
