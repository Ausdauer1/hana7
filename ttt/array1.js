const hong = { id: 1, name: "Hong" };
const kim = { id: 2, name: "Kim" };
const lee = { id: 3, name: "Lee" };
const park = { id: 4, name: "Park" };

const users = [hong, kim, lee, park];

const findId = (pid) => (a) => a.id === pid;
const idxId11 = users.findLastIndex(findId(1));
console.log("🚀  idxId11:", idxId11);

const idxId12 = users.findLastIndex(findId(1));

users.findLastIndex((a) => {
  return (i) => {
    return a.id === i;
  };
});
Array.prototype.pushx = function (x) {
  console.log("🚀 x:", x);
  this[this.length] = x;
};
users.pushx({ id: 100, name: "킹 세종" });
console.log("xxx", users);

Array.prototype.mapBy = function (k) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results.push(this[i][k]);
  }
  return results;
};

const ids2 = users.mapBy("id");
console.log("🚀 ids2:", ids2);
const ids3 = users.mapBy("name");
console.log("🚀 ids3:", ids3);

Array.prototype.map = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    results[i] = f(this[i], i, this);
  }
  return results;
};

Array.prototype.forEach = function (f) {
  for (let i = 0; i < this.length; i++) {
    f(this[i], i, this);
  }
};

users.forEach((a, i) => {
  console.log(i + 1, a.name);
});

Array.prototype.filter = function (f) {
  const results = [];
  for (let i = 0; i < this.length; i++) {
    if (f(this[i], i, this)) results.push(this[i]);
  }
  return results;
};
const oddIds = users.filter((a) => a.id % 2);
console.log("🚀 oddIds:", oddIds);
