function solution(keyName, keyTime) {
	let answer = [];

	let timetable = [];
	let n = keyName.length;
	for (let x of keyTime) {
		let temp = x.split(':');
		let time = parseInt(temp[0]) * 60 + parseInt(temp[1]);
		timetable.push(time);
	}

	const hash = new Map();
	for (let i = 0; i < n; i++) {
		if (hash.has(keyName[i])) {
			let tmp = hash.get(keyName[i]);
			tmp.push(timetable[i]);
			hash.set(keyName[i], tmp);
		} else {
			hash.set(keyName[i], [timetable[i]]);
		}
	}

	for (let [key, val] of hash) {
		if (val.length >= 3) {
			val.sort((a, b) => a - b);
			for (let i = 2; i < val.length; i++) {
				let time = val[i] - val[i - 2];
				if (time > 0 && time <= 60) {
					answer.push(key);
					break;
				}
			}
		}
	}
	answer.sort();
	return answer;
}

// console.log(
// 	solution(
// 		['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'],
// 		['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00']
// 	)
// ); // ["daniel"]
// console.log(
// 	solution(
// 		['a', 'a', 'a', 'a', 'a', 'b', 'b', 'b', 'b', 'b', 'b'],
// 		[
// 			'04:48',
// 			'23:53',
// 			'06:36',
// 			'07:45',
// 			'12:16',
// 			'00:52',
// 			'10:59',
// 			'17:16',
// 			'00:36',
// 			'01:26',
// 			'22:42',
// 		]
// 	)
// ); // ["b"]
console.log(
	solution(
		[
			'a',
			'a',
			'a',
			'a',
			'a',
			'a',
			'a',
			'b',
			'b',
			'b',
			'b',
			'b',
			'b',
			'b',
			'c',
			'c',
			'c',
			'c',
			'c',
			'c',
			'c',
			'c',
			'c',
		],
		[
			'00:37',
			'11:24',
			'14:35',
			'21:25',
			'15:48',
			'20:28',
			'07:30',
			'09:26',
			'10:32',
			'20:10',
			'19:26',
			'08:13',
			'01:08',
			'15:49',
			'02:34',
			'06:48',
			'04:33',
			'07:18',
			'00:05',
			'06:44',
			'13:33',
			'04:12',
			'03:54',
		]
	)
); // ["b"]

//keyName = ["daniel","daniel","daniel","luis","luis","luis","luis"], keyTime = ["10:00","10:40","11:00","09:00","11:00","13:00","15:00"]
