const assert = require("assert");

const hong = { id: 1, name: "Hong" };
const choi = { id: 5, name: "Choi" };
const kim = { id: 2, name: "kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };
const users = [kim, lee, park]; //

const addUser = (user) => [...users, user];
assert.deepStrictEqual(addUser(hong), [kim, lee, park, hong]);
assert.deepStrictEqual(users, [kim, lee, park]);

// const removeUser = (user) => users.filter((a) => a.name !== user.name);
const removeUser = ({ name: pname }) =>
  users.filter(({ name }) => name !== pname);

assert.deepStrictEqual(removeUser(lee), [kim, park]);
assert.deepStrictEqual(users, [kim, lee, park]);
console.log(users);
// 필터는 순수함수

const changeUser = (a, b) => {
  const index = users.findIndex((i) => i.name === a.name);
  return [...users.slice(0, index), b, ...users.slice(index + 1)];
};
console.log("dakfjdklsfjlkad");
console.log(users);
const changeUser2 = (from, to) =>
  users.map((user) => (user.id === from.id ? to : from));
assert.deepStrictEqual(changeUser2(kim, choi), [choi, lee, park]);
assert.deepStrictEqual(users, [kim, lee, park]);

const arr = [1, 2, 3, true];
// arr.push(true);
//const ret1 = arr.map(a => String(a))
// (n) => String(n)

const ret1 = arr.map(String); // String(n)
assert.deepStrictEqual(ret1, ["1", "2", "3", "true"]);
// ex2) 다음과 같이 작동하는 classNames 함수를 작성하시오.
const classNames = (...args) =>
  args
    .filter(Boolean) // <-- a => Boolean(a) <-- a -> !!a
    // .map((a) => a)
    .join(" ");
const ret2 = classNames("", "a b c", "d", "", "e");
assert.strictEqual(ret2, "a b c d e");
// 주의: ' a b c d  e'면 안됨!!

const reduce = (arr, fn, initValue) => {
  let i = 0;
  let acc = initValue ?? (i++, arr[0]);
  for (; i < arr.length; i++) {
    acc = fn(acc, arr[i], i, arr);
  }
  return acc;
};

console.log(reduce([1, 2, 3], (a, b) => a + b, 0)); // 6이면 통과!

// cf. [1,2,3].reduce((a,b) => a + b, 0);    // 6
reduce([1, 2, 3, 4, 5], (a, b) => a + b); // 15면 통과!
reduce([1, 2, 3, 4, 5], (a, b) => a * b, 1); // 120이면 통과!
reduce([2, 2, 2], (a, b) => a * b); // 8이면 통과!
reduce([3, 3, 3], (a, b) => a * b, 0); // 0이면

const arr2 = [1, 2, 3, 4, 5];
const square = (n) => n ** 2;
const cube = (n) => n ** 3;
const sqrt = Math.sqrt;

const xr1 = arr.map(square).map(sqrt).map(cube);
assert.deepStrictEqual(xr1, [1, 8, 27, 64, 125]);

const xr2 = arr.map((a) =>
  [square, sqrt, cube].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr2:", xr2);
const xr3 = arr.map((a) =>
  [cube, square, sqrt].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr3:", xr3);
const xr4 = arr.map((a) =>
  [square, cube, (n) => n + 1].reduce((acc, fn) => fn(acc), a)
);
console.log("🚀  xr4:", xr4);

return;
