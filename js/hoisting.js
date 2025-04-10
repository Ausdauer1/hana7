// console.log(zz);

zz = 9;

// console.log(zz);
console.log(globalThis["zz"]);

// var zz;
// == var = undefined;
console.log(this);
console.log(globalThis);
// 브라우저의 윈도우
// 브라우저는 this, globalThis의 초기화는 일단 같음

function add(a, b) {
  // var c;
  return a + b + c;
  // var c = 10;
}

const arr = [1, 2, 3, 4, 5];
let [a, b, ...c] = arr;
console.log(a, b, c);

class A {
  name;
  constructor(x) {
    this.name = x;
  }
}

// let { name } = new A("hong");
// console.log(name);
console.log(new A("hong"));

const { 0: a1, 1: a2 } = [1, 2];

console.log(a1, a2);

// const { id, addr } = user;      const { city } = addr;  // city = 'Seoul'
// const user = { id: 1, name: "Hong", addr: { city: "Seoul", road: "길" } };
// const {
//   id,
//   addr: { city },
// } = user; // city = 'Seoul'

// console.log(city);

// 연습문제 1
console.log(`===============연습문제1`);

const user1 = { id: 1, name: "Hong", addr: { city: "Seoul" } };
const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };

function f1({ id, name }) {
  console.log(id, name);
}
function f2(hong) {
  const { id, name } = hong;
  console.log(id, name);
}
f1(lee);
f2({ id: 2, name: "Lee" });

// 연습문제 2
console.log(`===============연습문제2`);
const user2 = { id: 1, name: "Hong", passwd: "xxx", addr: "Seoul" };
const { id, name, addr } = user2;
const userInfo = { id, name, addr };
console.log(userInfo);

// 연습문제 3
const arr3 = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr3;
console.log(id1, id2, id3);

//cf. const id1 = arr[0][0].id; // Bad
