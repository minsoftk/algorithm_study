const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function solution(input) {
	const n = input[0];
	const TShirts = input[1].split(' ');
	const [t, p] = input[2].split(' ');

	let cnt = 0;
	for (let i = 0; i < TShirts.length; i += 1) {
		cnt += Math.ceil(TShirts[i] / t);
	}

	const dozen = Math.floor(n / p);
	return [cnt, [dozen, n - p * dozen].join(' ')].join('\n');
}

// console.log(solution(input));

// 셋 선언
let s1 = new Set();
let s2 = new Set();
let s3 = new Set();
// 원소 추가
s1.add(10);
s1.add(20);
s1.add(30);
s1.add(40);

s2.add(10);
s2.add(11);
s2.add(22);
s2.add(33);
s2.add(44);

// 셋 출력
console.log('s1:', s1);
console.log('s2:', s2);

// 원소 삭제
s1.delete(20);
console.log('20 삭제 후 s1:', s1);

// 원소의 존재 여부 확인
console.log(s1.has(33));
console.log(s2.has(33));

// 집합의 크기 확인
console.log(s1.size, s2.size);

console.log('s1, s2의 값:', s1, s2);

// 합집합 연산
s3 = new Set();
s1.forEach((item) => s3.add(item));
s2.forEach((item) => s3.add(item));
console.log('s1과 s2의 합집합:', s3);

// 교집합 연산
console.log(
	's1과 s2의 교집합:',
	[...s1].filter((item) => s2.has(item))
);

// 차집합 연산
console.log(
	's1과 s2의 차집합:',
	[...s1].filter((x) => !s2.has(x))
);
console.log(
	's2과 s1의 차집합:',
	[...s2].filter((x) => !s1.has(x))
);
