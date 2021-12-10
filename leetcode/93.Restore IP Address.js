function sol(ip) {
	function DFS(L, cnt) {
		if (tmp[0] >= 3 || tmp[1] >= 6 || tmp[2] >= 9) return;
		if (L === 3) {
			let first = Number(ip.substring(0, tmp[0] + 1));
			if (first.toString() !== ip.substring(0, tmp[0] + 1)) return;
			let second = Number(ip.substring(tmp[0] + 1, tmp[1] + 1));
			if (second.toString() !== ip.substring(tmp[0] + 1, tmp[1] + 1)) return;
			let third = Number(ip.substring(tmp[1] + 1, tmp[2] + 1));
			if (third.toString() !== ip.substring(tmp[1] + 1, tmp[2] + 1)) return;
			let forth = Number(ip.substring(tmp[2] + 1, ip.length));
			if (forth.toString() !== ip.substring(tmp[2] + 1, ip.length)) return;
			if (first > 255 || first < 0 || forth > 255 || forth < 0) return;
			if (second > 255 || second < 0 || third > 255 || third < 0) return;

			// console.log(tmp);
			let ip_string =
				String(first) +
				'.' +
				String(second) +
				'.' +
				String(third) +
				'.' +
				String(forth);

			answer.push(ip_string);
		} else {
			for (let i = cnt; i < ip.length - 1; i++) {
				tmp.push(i);
				DFS(L + 1, i + 1);
				tmp.pop();
			}
		}
	}

	let answer = [];
	if (ip.length < 4 || ip.length > 12) return answer;
	let tmp = [];
	DFS(0, 0);
	return answer;
}

console.log(sol('25525511135'));
console.log(sol('0000'));
console.log(sol('1111'));
