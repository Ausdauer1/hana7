const assert = require("assert");
// obejct
// Object.defineProperties();
const arr = [1, 2, 3, 4, 5];
const hong = { id: 1, name: "Hing" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const users = [hong, lee, kim];

// Object.defineProperty(Array.prototype, "firstObject", {
//   get: function () {
//     return this[0];
//   },
// });
// Object.defineProperty(Array.prototype, "lastObject", {
//   get: function () {
//     return this[this.length - 1];
//   },
// });
Object.defineProperties(Array.prototype, {
  firstObject: {
    get() {
      return this.at(0);
    },
    set(value) {
      this[0] = value;
    },
  },
  lastObject: {
    get() {
      // return this[this.length - 1];
      return this.at(-1);
    },
    set(value) {
      this[this.length - 1] = value;
    },
  },
});
// console.log(arr.len);

Array.prototype.mapBy = function (prop) {
  // const results = [];
  // for (let i = 0; i < this.length; i++) {
  //   results.push(this[i][prop]);
  // }
  // return results;
  return this.map((a) => a[prop]);
};
Array.prototype.filterBy = function (prop, value, isInclude) {
  // return this.filter((a) => a[prop] === value);
  const cb = isInclude
    ? (a) => a[prop].includes(value)
    : (a) => a[prop] === value;
  return this.filter(cb);
};

Array.prototype.rejectBy = function (prop, value, isInclude) {
  // return this.filter((a) => a[prop] === value);
  const cb = isInclude
    ? (a) => !a[prop].includes(value)
    : (a) => a[prop] !== value;
  return this.filter(cb);
};

Array.prototype.findBy = function (prop, value) {
  return this.find((a) => a[prop] === value);
};

Array.prototype.sortBy = function (prop) {
  const [key, direction] = prop.split(":");
  const upDown = direction === "desc" ? 1 : -1;
  return this.sort((a, b) => (a[key] < b[key] ? 1 * upDown : -1 * upDown));
};

assert.deepStrictEqual([arr.firstObject, arr.lastObject], [1, 5]);
assert.deepStrictEqual(users.firstObject, hong);
assert.deepStrictEqual(users.lastObject, kim);
assert.deepStrictEqual(users.mapBy("id"), [1, 3, 2]);
assert.deepStrictEqual(users.mapBy("name"), ["Hing", "Lee", "Kim"]);

assert.deepStrictEqual(users.filterBy("id", 2), [kim]);

assert.deepStrictEqual(users.filterBy("name", "i", true), [hong, kim]); // key, value일부, isInclude

assert.deepStrictEqual(users.rejectBy("id", 2), [hong, lee]);
assert.deepStrictEqual(users.rejectBy("name", "i", true), [lee]);

assert.deepStrictEqual(users.findBy("name", "Kim"), kim);

assert.deepStrictEqual(users.sortBy("name:desc"), [lee, kim, hong]);
assert.deepStrictEqual(users.sortBy("name"), [hong, kim, lee]);
return;
users.firstObject = kim;
assert.deepStrictEqual(users.firstObject, kim);
users.lastObject = hong;
assert.deepStrictEqual(users.lastObject, hong);
