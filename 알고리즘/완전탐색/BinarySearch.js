const data = Array(10).fill(0);

for (let i = 0; i < data.length; i += 1) {
  data[i] = Math.floor(Math.random() * 10 + 1);
}
data.sort();
/**
 * get Array and return bubble Sorted Array
 * @param {Array} arr
 * @return {Array}
 */
function BinarySearch(data, search) {
  if (data.length === 1 && data[0] === search) return true;
  if (data.length === 1 && data[0] !== search) return false;

  let mid = Math.floor(data.length / 2);
  if (data[mid] === search) return true;
  else {
    if (search > data[mid])
      return BinarySearch(data.slice(mid, data.length), search);
    else return BinarySearch(data.slice(0, mid), search);
  }
}

console.log(BinarySearch(data, 5));
