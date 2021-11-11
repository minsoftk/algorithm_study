var reverse = function (x) {
	let flag = 1;
	if (x < 0) flag = -1;
	x = x.toString().split('').reverse().join('');
	x = parseInt(x);
	if (x > -1 * Math.pow(2, 31) && x > Math.pow(2, 31)) return 0;
	return x * flag;
};
