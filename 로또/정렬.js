const string = `8 19 21 24 32 42
7 19 22 32 42 44
3 5 11 17 38 41
7 10 18 19 24 45
1 3 19 25 33 36
5 7 11 21 30 36
1 2 11 20 30 36
22 25 35 37 39 43
9 20 23 28 29 34
1 14 16 24 35 41`;

function sort(string) {
  return string
    .split('\n')
    .map((elem) => elem.split(' ').map(Number))
    .sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    })
    .map((elem) => elem.join(' '));
}

console.log(sort(string).join('\n'));
