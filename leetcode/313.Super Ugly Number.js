function sol(n, primes) {
	let arr = [];
	arr[0] = 1;

	let k = [];
	for (let i = 0; i < primes.length; i++) k[i] = primes[i];

	for (let i = 1; i < n; i++) {
		let min = 1e9;
		let temp = 0;
		for (let j = 0; j < primes.length; j++) {
			if (min > k[j]) temp = j;
			min = Math.min(min, k[j]);
		}
		k[temp] *= 2;
		arr[i] = min;
	}
	return arr[n - 1];
}

console.log(sol(12, [2, 7, 13, 19])); // 32
console.log(sol(1, [2, 3, 5])); // 1
console.log(sol(15, [3, 5, 7, 11, 19, 23, 29, 41, 43, 47])); // 35

/*
var nthSuperUglyNumber = function (n, primes) {
  const dy = Array(n + 1).fill(1);
  const coef = Array(primes.length).fill(1);
  for (let i = 2; i <= n; i++) {
    let minValue = Infinity;

    for (let j = 0; j < primes.length; j++) {
      minValue = Math.min(minValue, dy[coef[j]] * primes[j]);
    }

    for (let j = 0; j < primes.length; j++) {
      coef[j] += dy[coef[j]] * primes[j] === minValue ? 1 : 0;
    }
    dy[i] = minValue;
  }
  return dy[n];
};

console.log(nthSuperUglyNumber(12, [2, 7, 13, 19]));
*/
