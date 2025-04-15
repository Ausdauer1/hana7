const assert = require("assert");
const { start } = require("repl");
// ---------------------------------------------------------
// const { arrayBuffer } = require("stream/consumers");

const arr = [1, 2, 3, 4];

const push = (arr, ...args) => [...arr, ...args];
const pop = (arr, cnt) => (cnt ? arr.slice(-cnt) : arr.at(-1));
assert.deepStrictEqual(push(arr, 5, 6), [1, 2, 3, 4, 5, 6]);
assert.deepStrictEqual(pop(arr), 4);
assert.deepStrictEqual(pop(arr, 2), [3, 4]); // 2개 팝!
const unshift = (arr, ...args) => [...args, ...arr];
assert.deepStrictEqual(unshift(arr, 0), [0, 1, 2, 3, 4]);
assert.deepStrictEqual(unshift(arr, 7, 8), [7, 8, 1, 2, 3, 4]);

const shift = (arr, cnt = 1) => [arr.slice(0, cnt), arr.slice(cnt)];
assert.deepStrictEqual(shift(arr), [[1], [2, 3, 4]]); // [shift되는 원소들, 남은 원소들]
assert.deepStrictEqual(shift(arr, 2), [
  [1, 2],
  [3, 4],
]); // 2개 shift

assert.deepStrictEqual(arr, [1, 2, 3, 4]);

const arr2 = [1, 2, 3, 4];
const deleteArray = (arr, s, e) => {
  if (typeof s === "number") {
    return arr.filter((_, i) => i < s || i >= e);
  } else {
    return arr.filter((arr) => arr[s] !== e);
  }
  // arr.filter((a) => a[s] !== a[])
  // const result = [];
  // return arr.forEach((a, i) => {
  //   result.push(arr.filter((b) => b[startIndex] !== a[]));
  // })
};
assert.deepStrictEqual(deleteArray(arr2, 2), [1, 2]); // 2부터 끝까지 지우고 나머지 리턴
assert.deepStrictEqual(deleteArray(arr2, 1, 3), [1, 4]); // 1부터 3까지 지우고 나머지 리턴
assert.deepStrictEqual(arr2, [1, 2, 3, 4]);

const Hong = { id: 1, name: "Hong" };
const Kim = { id: 2, name: "Kim" };
const Lee = { id: 3, name: "Lee" };
const users = [Hong, Kim, Lee];

assert.deepStrictEqual(deleteArray(users, 2), [Hong, Kim]);
assert.deepStrictEqual(deleteArray(users, 1, 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "id", 2), [Hong, Lee]);
assert.deepStrictEqual(deleteArray(users, "name", "Lee"), [Hong, Kim]);

const repaintUsers = users.filter((user) => user.id !== 2);
console.log("🚀 repaintUsers:", [...repaintUsers]);

const reduce = (arr, fn, initValue) => {
  for (let n of arr) {
  }
};

//키페어는 필요한 값을 구하고 짝꿍을 찾는다..?
