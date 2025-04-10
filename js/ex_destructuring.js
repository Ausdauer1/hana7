"use strict";

console.log(this);
const user = { id: 1, name: "Hong", passwd: "xxx", addr: { city: "Seoul" } };

const hong = { id: 1, name: "Hong" };
const lee = { id: 2, name: "Lee" };
// f1(hong);  f2(hong)  ⇒ 1, 'Hong'
// f1(lee);  f2(lee)  ⇒ 2, 'Lee'

function f1({ id, name }) {
  console.log(id, name);
}
function f2(obj) {
  const { id, name } = obj;
  console.log(id, name);
}

const { passwd, ...userInfo } = user;
//패스워드를 버릴려고,,
console.debug(passwd);

const arr = [[{ id: 1 }], [{ id: 2 }, { id: 3 }]];
const [[{ id: id1 }], [{ id: id2 }, { id: id3 }]] = arr;

const user1 = { name: "Hong", passwd: "xyz", addr: "Seoul" };

function getUserValueExceptInitial(k) {
  const { [k]: val } = user1;
  const [, ...rest] = val;
  return rest.join("");
}

console.log(getUserValueExceptInitial("name")); // 'ong'
console.log(getUserValueExceptInitial("passwd")); // 'yz'
console.log(getUserValueExceptInitial("addr")); // 'eoul'
