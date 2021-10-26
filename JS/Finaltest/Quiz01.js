/*
//1.
function(a, b) {
    return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
});) // 오름차순 정렬

console.log(object.sort(function(a, b) {
    return a.name > b.name ? -1 : a.name > b.name ? 1 : 0;
});) // 내림차순 정렬

function case_insensitive_comp(strA, strB) {
	return strA.toLowerCase().localeCompare(strB.toLowerCase());
}


//2.
var str = 'ACBacbA';
// split the string in chunks
str = str.split('');
// sorting
str = str.sort();
str = str.sort(case_insensitive_comp);
// concatenate the chunks in one string
str = str.join('');

alert(str);


//3. 
// 문자열 배열 선언과 초기화
var names = new Array( 'bbb', 'AAA', 'DDD', 'CCC', 'aaa' );



// 대소문자 구분하여 정렬
document.write(names.sort() + '<br />');
// 출력 결과: AAA,CCC,DDD,aaa,bbb



// 대소문자 구분 없이 정렬
document.write(names.sort(compStringIgnoreCase) + '<br />');
// 출력 결과: AAA,aaa,bbb,CCC,DDD



// 대소문자 구분 없이 내림차순 정렬
var s = names.sort(compStringIgnoreCase);
s.reverse();
document.write(s + '<br />');
// 출력 결과: DDD,CCC,bbb,aaa,AAA



// 대소문자 구분없이 정렬에, 내부적으로 필요한 비교 함수
function compStringIgnoreCase(a, b) {
  if (a.toLowerCase() < b.toLowerCase()) return -1;
  if (b.toLowerCase() < a.toLowerCase()) return 1;
  return 0;
}

let temp = [...hash].sort((a, b) => {
		if (a[0].toLowerCase() < b[0].toLowerCase()) return -1;
		if (b[0].toLowerCase() === a[0].toLowerCase()) return -1;
		return 0;
	});
*/

function solution(arr) {
	let answer = '';
	let hash = new Map();

	for (let i = 0; i < arr.length; i++) {
		if (hash.has(arr[i])) hash.set(arr[i], hash.get(arr[i]) + 1);
		else hash.set(arr[i], (hash.get(arr[i]) || 0) + 1);
	}

	let temp = [...hash].sort((a, b) => {
		let temp = a[0].toLowerCase();
		let temp2 = b[0].toLowerCase();
		if (temp < temp2) return temp2 - temp;
		if (b[0].toLowerCase() === a[0].toLowerCase()) return -1;
		return 0;
	});

	console.log(temp);
	for (let i = 0; i < temp.lenth; i++) {
		for (let j = 0; j < temp[i][1]; j++) {
			answer = answer + temp[i][0];
		}
	}
	return answer;
}
console.log(solution('xxXXaabABBv'));

/* function solution(s) {
	let answer = '';

	let hash = new Map();
	for (let i = 0; i < s.length; i++) {
		hash.set(s[i], (hash.get(s[i]) || 0) + 1);
	}
	// let temp = [...hash].sort((a, b) => {
	// 	let temp = a[0].toLowerCase();
	// 	let temp2 = b[0].toLowerCase();
	// 	if (temp < temp2) return temp2 - temp;
	// 	if (temp)
	// 	return 0;
	// });

	let temp = [...hash].sort((a, b) => {
		return (
			(a[1] > b[1] ? -1 : a[1] < b[1] ? 1 : 0) ||
			(a[0] < b[0] ? -1 : a[0] > b[0] ? 1 : 0)
		);
	});
	console.log(temp);

	for (let i = 0; i < temp.length; i++) {
		for (let j = 0; j < temp[i][1]; j++) {
			answer += temp[i][0];
		}
	}
	return answer;
}

 */
