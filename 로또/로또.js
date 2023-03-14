console.log(showNumbers());

function showNumbers() {
  const res = [];
  for (let i = 0; i < 5; i++) {
    const arr = makeNewNums();
    res.push(insertionSort(arr).join(' '));
  }

  return sort(res);
}

function makeNewNums() {
  let set = new Set();
  for (let i = 0; i < 6; i += 1) {
    let num = Math.floor(Math.random() * 45 + 1);
    while (set.has(num)) {
      num = Math.floor(Math.random() * 45 + 1);
    }
    set.add(num);
  }

  return [...set];
}

/**
 * get Array and return bubble Sorted Array
 * @param {Array} arr
 * @return {Array}
 */
function insertionSort(arr) {
  // 5 3 2 4
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        const temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      } else break;
    }
  }

  return arr;
}

function sort(string) {
  return string
    .map((elem) => elem.split(' ').map(Number))
    .sort((a, b) => {
      if (a[0] === b[0]) return a[1] - b[1];
      else return a[0] - b[0];
    })
    .map((elem) => elem.join(' '))
    .join('\n');
}
