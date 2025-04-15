const assert = require("assert");

// const range = (start, end, change = 1) => {
//   const arr = [];
//   if (!end) {
//     end = start;
//     start = 1;
//   }
//   for (let i = start; i <= end; i = i + change) {
//     arr.push(i);
//   }
//   return arr;
// };
// console.log(range(1, 10, 1));
// console.log(range(1, 10));
// // console.log(range(100));

// console.log(range(10, 1, -2));

const range = (start, end, step = start > end ? -1 : 1) => {
  if (step === 0 || start === end) return [start];
  if ((start - end) * step > 0) return [];
  // if (end === undefined) {
  //   if (start > 0) {
  //     end = start;
  //     start = 1;
  //   } else if (start < 0) {
  //     end = -1;
  //   } else {
  //     return [0];
  //   }
  // }
  // if (end === undefined && start === 0) return [0];
  const t = start;
  end = end ?? (start > 0 ? ((start = 1), t) : start < 0 ? -1 : 0);
  arr = [];
  for (let i = start; start > end ? i >= end : i <= end; i += step) {
    arr.push(i);
  }

  return arr;
};

assert.deepStrictEqual(range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(1, 10, 2), [1, 3, 5, 7, 9]);
assert.deepStrictEqual(range(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.deepStrictEqual(range(10, 1), [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);

assert.deepStrictEqual(range(5, 5, 0), [5]);
assert.deepStrictEqual(range(1, 5, 0), [1]);
assert.deepStrictEqual(range(5, 5, -1), [5]);
assert.deepStrictEqual(range(5, 5), [5]);
assert.deepStrictEqual(range(0, 0, 5), [0]);
assert.deepStrictEqual(range(1, 5, -1), []);

assert.deepStrictEqual(range(1, 5, 6), [1]);
assert.deepStrictEqual(range(0, 5), [0, 1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(-3, 0), [-3, -2, -1, 0]);

assert.deepStrictEqual(range(5, 1, 1), []);
assert.deepStrictEqual(range(0, -1), [0, -1]);
assert.deepStrictEqual(range(0, -3), [0, -1, -2, -3]);
assert.deepStrictEqual(range(5, 1), [5, 4, 3, 2, 1]);
assert.deepStrictEqual(range(10, 1, -2), [10, 8, 6, 4, 2]);

assert.deepStrictEqual(range(5), [1, 2, 3, 4, 5]);
assert.deepStrictEqual(range(0), [0]);
assert.deepStrictEqual(range(0, 0), [0]);
assert.deepStrictEqual(range(2, 1, -5), [2]);
assert.deepStrictEqual(range(0, -1, -5), [0]);
assert.deepStrictEqual(range(-5), [-5, -4, -3, -2, -1]);
assert.deepStrictEqual(
  range(50),
  Array.from({ length: 50 }, (_, i) => i + 1)
);
assert.deepStrictEqual(
  range(1, 150, 3),
  Array.from({ length: 50 }, (_, i) => i * 3 + 1)
);

const keyPair2 = (arr, N) => {
  for (let [xi, x] of Object.entries(arr)) {
    for (let [yi, y] of Object.entries(arr)) {
      if (x !== y && x + y === N) {
        console.log(x, y, N);
        return [Number(xi), Number(yi)];
      }
    }
  }
  // return result;
};
// const keyPair = (arr, N) => {
//   for (let [xi, x] of Object.entries(arr)) {
//     let needNum = N - x;
//     arr.indexOf(needNum) != -1 ? return [xi, index] : continue;
//     console.log(index);

//   }
// };
const keyPair = (arr, sum) => {
  const cache = {};
  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (cache[value]) return [cache[value], i];
    cache[sum - value] = i;
  }
};

assert.deepStrictEqual(keyPair([1, 3, 4, 5], 7), [1, 2]);
assert.deepStrictEqual(keyPair([1, 4, 45, 6, 10, 8], 16), [3, 4]);
assert.deepStrictEqual(keyPair([1, 2, 4, 3, 6], 10), [2, 4]);
assert.deepStrictEqual(keyPair([1, 2, 3, 4, 5, 7], 9), [1, 5]);

return;
