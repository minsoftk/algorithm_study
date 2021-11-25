function solution(n) {
	let temp = [];
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			temp.push(i); // temp에 약수들 저장
		}
	}
	console.log(temp);

	let yacksu = [];
	for (let i = 0; i < temp.length; i++) {
		let temp2 = temp[i];
		div = 2;
		while (temp2 > 1) {
			if (temp2 % div === 0) {
				yacksu.push(div);
				temp2 /= div;
			} else div++;
		}
	}
	yacksu.sort();
	console.log(yacksu);
}

console.log(solution(100)); // 28
