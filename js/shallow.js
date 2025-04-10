const assert = require("assert");
const arr = [100, 200, 300, 400, 500, 600, 700];

for (const i in arr) {
  // console.log(i);
  // console.log(arr[i]);
}

const obj = { name: "Kim", addr: "Yongsan", level: 1, role: 9, receive: false };

console.log("------------------- prac 3");
for (const i in Object.keys(obj)) {
  console.log(Object.keys(obj)[i]);
}

console.log("------------------- prac 4");

for (const i in Object.values(obj)) {
  console.log(Object.values(obj)[i]);
}
console.log("------------------- prac 5");

for (const i of Object.values(obj)) {
  console.log(i);
}

console.log("------------------- prac 6");
Object.defineProperty(obj, "level", { enumerable: false });
console.log(Object.entries(obj));

console.log("------------------- prac 7");
Object.defineProperty(obj, "role", {
  writable: false,
  enumerable: true,
  configurable: false,
});
console.log(Object.getOwnPropertyDescriptor(obj, "role"));

console.log("------------------- chapter 2");
let data = [
  ["A", 10, 20],
  ["B", 30, 40],
  ["C", 50, 60, 70],
];
const newData = {};
for (const i of data) {
  const [, ...tmp] = i;
  newData[i[0]] = tmp;
}
function makeObjectFromArray(arrData) {
  let retObj = {};
  for (const [k, ...v] of arrData) {
    retObj = { ...retObj, [k]: v };
  }
  return retObj;
}
console.log(newData);

const newArr = [];
for (const [a, b] of Object.entries(newData)) {
  newArr.push([a, ...b]);
}

console.log(newArr);
console.log("------------------- chapter 3");

function shallowCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    ret[k] = v;
  }
  // for(const k of Object.keys(obj)) {
  //   ret[k] = obj[k]
  // }
  return ret;
}

function deepCopy(obj) {
  const ret = {};
  for (const [k, v] of Object.entries(obj)) {
    // ret[k] = v !== null && typeof v === "object" ? { ...v } : v;
    if (v !== null && typeof v === "object") {
      ret[k] = deepCopy(v);
    } else {
      ret[k] = v;
    }
  }
  return ret;
}

const kim = { nid: 3, nm: "Kim", addr: "Pusan" };
// const newKim1 = shallowCopy(kim);
// const newKim1 = Object.assign({}, kim);
const newKim1 = { ...kim };
newKim1.addr = "Daegu";
console.log(kim.addr !== newKim1.addr); // true면 통과!
// const newKimA = Object.assign({}, kim);
// console.log(newKimA);
// const newKimB = { ...kim };
// const abc = { ...kim };
// console.log(newKimB);
// const newKim1 = shallowCopy(kim);
newKim1.addr = "Daegu";
console.log("shallow");
// console.log(kim.addr !== abc.addr); // true면 통과!

const kim2 = {
  nid: 3,
  nm: "Kim",
  nil: null,
  addr: { city: "Pusan", road: "Haeundaero", zip: null },
};

const kim2S = { ...kim2 };
console.log(kim2.nid !== kim2S.nid);
kim2.addr.city = "aa";
kim2S.addr.city = "bb";
console.log(kim2);
console.log(kim2S);

const newKim2 = deepCopy(kim2);
newKim2.addr.city = "Daegu";
console.log(kim2.addr.city !== newKim2.addr.city); // true면 통과!
