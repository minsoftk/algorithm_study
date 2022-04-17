// function solution(genres, plays) {
// 	var answer = [];
// 	let gen = new Map();
// 	let genChild = new Map();

// 	for (let i = 0; i < genres.length; i++) {
// 		gen.set(genres[i], (gen.get(genres[i]) || 0) + plays[i]);
// 		if (genChild.get(genres[i])) {
// 			let temp = [...genChild.get(genres[i]), [i, plays[i]]];
// 			genChild.set(genres[i], temp);
// 		} else if (genChild.get(genres[i]) === 0) {
// 			let temp = [...genChild.get(genres[i]), [i, plays[i]]];
// 			genChild.set(genres[i], temp);
// 		} else genChild.set(genres[i], [[i, plays[i]]]);
// 	}

// 	let genre = [...gen].sort((a, b) => b[1] - a[1]);
// 	console.log(genre);
// 	for (let x of genre) {
// 		let [temp_g, temp_p] = x;
// 		let twoPlays = genChild.get(temp_g).sort((a, b) => b[1] - a[1]);
// 		console.log(twoPlays);
// 		for (let i = 0; i < twoPlays.length; i++) {
// 			if (i >= 2) break;
// 			answer.push(twoPlays[i][0]);
// 		}
// 	}
// 	return answer;
// }

function solution(genres, plays) {
	var answer = [];
	var genresPlayCount = {};
	var playsOrder = [];
	var genresOrder = [];
	var indexMap = {};

	genres.forEach(function (genre, i) {
		// 장르별 재생된 횟수의 합
		if (genresPlayCount[genre]) {
			genresPlayCount[genre] += plays[i];
		} else {
			genresPlayCount[genre] = plays[i];
		}

		// genres, plays의 인덱스 맵
		if (!indexMap[genre]) {
			indexMap[genre] = {};
		}
		indexMap[genre][plays[i]] = i;
	});
	console.log(indexMap);
	// 플레이 높은 순으로 장르명 정렬
	var genresKeys = Object.keys(genresPlayCount);
	genresKeys.sort(function (a, b) {
		if (genresPlayCount[b] - genresPlayCount[a] < 0) {
			return -1;
		}
	});

	genresKeys.forEach(function (genresKey) {
		var genre = indexMap[genresKey];
		var genreKeys = Object.keys(genre);
		genreKeys.sort(function (a, b) {
			return b - a;
		});

		var index = 0;
		for (var j = 0; j < genreKeys.length; ++j) {
			if (index >= 2) {
				return;
			}
			answer.push(genre[genreKeys[j]]);
			++index;
		}
	});

	// console.log(genresPlayCount)
	// console.log(indexMap);
	// console.log(genresKeys);

	return answer;
}

console.log(
	solution(
		['classic', 'pop', 'classic', 'classic', 'pop'],
		[500, 600, 150, 800, 2500]
	)
);
//[4, 1, 3, 0]
