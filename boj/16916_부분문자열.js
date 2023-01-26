const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs')
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

function solution(input) {
  const [s, p] = input;

  let sHash = 0,
    pHash = 0;
  let base = 1;
  const MOD = 10000007;
  for (let i = p.length - 1; i >= 0; i -= 1) {
    sHash = (sHash + s[i].charCodeAt() * base) % MOD;
    pHash = (pHash + p[i].charCodeAt() * base) % MOD;
    if (i > 0) base = ((base % MOD) * 31) % MOD;
  }

  for (let i = 0; i <= s.length - p.length; i += 1) {
    if (i > 0) {
      sHash =
        ((31 * sHash) % MOD) -
        ((31 * s[i - 1].charCodeAt() * base) % MOD) +
        s[p.length - 1 + i].charCodeAt();
      sHash %= MOD;
    }
    if (pHash === sHash) {
      let check = true;
      for (let j = 0; j < p.length; j += 1) {
        if (s[i + j] !== p[j]) {
          check = false;
          break;
        }
      }
      if (check) return 1;
    }
  }
  return 0;
}

console.log(solution(input));
