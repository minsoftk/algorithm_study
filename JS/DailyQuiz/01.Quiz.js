function solution(s) {
	let hash = new Map();
	for (let x of s[0]) {
		hash.set(x, (hash.get(x) || 0) + 1);
	}

	for (let i = 1; i < s.length; i++) {
		let hash2 = new Map();

		for (let x of s[i]) {
			hash2.set(x, (hash2.get(x) || 0) + 1);
		}

		for (let [key, val] of hash) {
			hash.set(key, Math.min(val, hash2.get(key)));
		}
	}
	let arr = [];
	for (let [key, val] of hash) {
		for (let i = 0; i < val; i++) arr.push(key);
	}
	return arr;
}

console.log(solution(['steasue', 'sasseysu', 'kseseas']));
// console.log(solution(['ackky', 'kabck', 'yokkcs']));
// console.log(solution(['longlong', 'longtong', 'longbig']));

/*
function solution(words){  
  let answer=[];
  let sH = new Map();
  for(let x of words[0]){
      sH.set(x, (sH.get(x) || 0) + 1);
  }
  for(let i=1; i<words.length; i++){
      let tmp=new Map();
      for(let x of words[i]){
          if(sH.get(x)){
              sH.set(x, sH.get(x)-1);
              tmp.set(x, (tmp.get(x) || 0) + 1);
          }
      }
      sH=tmp;
  }
  let str="";
  for(let [key, val] of sH){
      str+=key.repeat(val);
  }
  answer=str.split('');
  return answer;
}
console.log(solution(["longlong", "longtong", "longbig"])); //["l", "o", "n", "g", "g"]
console.log(solution(["cool", "rock", "cook"])); //["c", "o"]
console.log(solution(["a", "aaa", "aaaaa"])); //["a"]
console.log(solution(["aabbss", "bbbss", "csc", "asb"])); //["s"]
console.log(solution(["abcde", "edcba", "cdeba", "debac", "acbed"])); //["a", "c", "b", "e", "d"]
*/
