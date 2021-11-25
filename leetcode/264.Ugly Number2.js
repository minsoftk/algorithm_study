function sol(n) {
	if (n <= 0) return false;
	if (n === 1) return true; // start number 1

	let p2 = 0,
		p3 = 0,
		p5 = 0; //pointers for 2, 3, 5

	let k = [];
	k[0] = 1;
	for (var i = 1; i < n; i++) {
		k[i] = Math.min(k[p2] * 2, Math.min(k[p3] * 3, k[p5] * 5));
		if (k[i] == k[p2] * 2) p2++;
		if (k[i] == k[p3] * 3) p3++;
		if (k[i] == k[p5] * 5) p5++;
	}
	return k[n - 1];
}

console.log(sol(10)); // 12
console.log(sol(11)); // 15

// function sol(n) {
// 	// 2,3,5 인수를 가지면 true return
// 	function insu(x) {
// 		let set = new Set();
// 		while (x > 0) {
// 			if (x % 2 === 0) {
// 				set.add(2);
// 				x /= 2;
// 			} else if (x % 3 === 0) {
// 				set.add(3);
// 				x /= 3;
// 			} else if (x % 5 === 0) {
// 				set.add(5);
// 				x /= 5;
// 			} else {
// 				if (x !== 1) set.add(x);
// 				break;
// 			}
// 		}
// 		for (let x of set) {
// 			if (x !== 2 && x !== 3 && x !== 5) return true;
// 		}
// 		return false;
// 	}

// 	// 소수면 true return
// 	function isPrime(x) {
// 		for (let i = 2; i * i <= x; i++) {
// 			if (x % i === 0) return false;
// 		}
// 		return true;
// 	}

// 	let num = 0;
// 	if (n === 1) return 1;
// 	if (n === 2) return 2;
// 	let i = 0;
// 	while (1) {
// 		i++;
// 		while ((i >= 7 && isPrime(i)) || insu(i)) i++;
// 		num++;
// 		if (num === n) {
// 			return i;
// 		}
// 	}
// }

// console.log(sol(10)); // 12
// console.log(sol(11)); // 15
