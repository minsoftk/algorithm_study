function solution(str1, str2) {
	let a = new Map();
	let b = new Map();

	let cnt = 0;
	let temp = '';
	let temp_char = '';
	for (let i = 0; i < str1.length; i += 1) {
		let ch = str1[i].toLowerCase();
		if (ch >= 'a' && ch <= 'z') {
			temp_char = ch;
			temp += ch;
			cnt += 1;
		} else if (cnt === 1) {
			temp_char = '';
			temp = '';
			cnt = 0;
			continue;
		}

		if (cnt === 2) {
			a.set(temp, (a.get(temp) || 0) + 1);
			cnt = 1;
			temp = temp_char;
		}
	}

	temp = '';
	temp_char = '';
	cnt = 0;
	for (let i = 0; i < str2.length; i += 1) {
		let ch = str2[i].toLowerCase();
		if (ch >= 'a' && ch <= 'z') {
			temp_char = ch;
			temp += ch;
			cnt += 1;
		} else if (cnt === 1) {
			temp_char = '';
			temp = '';
			cnt = 0;
			continue;
		}
		if (cnt === 2) {
			b.set(temp, (b.get(temp) || 0) + 1);
			cnt = 1;
			temp = temp_char;
		}
	}

	// console.log(a, b);
	let intersection = 0;
	let intersection_arr = [];
	let union = 0;
	for (let [key, val] of a) {
		if (b.get(key)) {
			intersection += Math.min(val, b.get(key));
			intersection_arr.push(key);
		}
	}

	for (let [key, val] of a) {
		if (intersection_arr.includes(key)) {
			union += Math.max(val, b.get(key));
		} else union += val;
	}

	for (let [key, val] of b) {
		if (intersection_arr.includes(key)) continue;
		union += val;
	}
	// console.log(intersection_arr, intersection, union);
	let answer = parseInt((intersection / union) * 65536);
	return isNaN(answer) ? 65536 : answer;
}

function solution2(str1, str2) {
	function findCh(s) {
		const result = [];
		for (let i = 0; i < str1.lenght - 1; i++) {
			const text = s.substr(i, 2);
			if (text.match(/[A-Za-z]{2}/)) {
				result.push(text.toLowerCase());
			}
		}
	}

	const arr1 = findCh(str1);
	const arr2 = findCh(str2);
	const set = new Set([...arr1, ...arr2]);
	let union = 0;
	let intersection = 0;

	set.forEach((item) => {
		const has1 = arr1.filter((x) => x === item).length;
		const has2 = arr2.filter((x) => x === item).length;
		union += Math.max(has1, has2);
		intersection += Math.min(has1, has2);
	});
	return union === 0 ? 65536 : Math.floor((intersection / union) * 65536);
}

console.log(solution('E=M*C^2', 'E=M*C^2')); // 16384;
