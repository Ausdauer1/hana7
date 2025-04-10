const user = {
  "": 1,
  " ": 1, // 'id': 1, '0y': 2 모두 OK!
  123: 1, // user[123], user['123'] OK, but user.123 is SyntaxError!!
  123n: 4,
  12345n: 2, // user[12345], user[12345n], user['12345'] OK, but user['12345n'] is undefined!
  true: 1, // OK  user[true]  user.true
  id: 2,
  [`name`]: "Hong", // But, `name`: 'Hong'은 SyntaxError: Unexpected template string!
  [Symbol()]: "Hong", // OK But, Symbol(): 'Hong'은 SyntaxError: Unexpected token ':'
  [`${new Date()}`]: 365, // OK! 'Sun Jul …': 365
  "my-friends": ["Han", "Kim"],
  getInfo: () => `${this.id}-${this.name}`, // OK! But, this is not user!
  getInfo() {
    return `${this.id}-${this.name}`;
  }, // OK! getInfo의 최종 <f.o>
};

console.log(user, user.true);
const keys = Object.keys(user);
// class가 reflec 즉, 비춰지는 것
console.log("🚀 keys:", keys, Reflect.ownKeys(user));

const k = "id";
const { [k]: kk } = user;
console.log("🚀 k:", k);
// $, _ 만 가능(변수명)

const oth = user[123];
console.log("🚀 oth:", oth);

const a = {};
const b = { k: 1 };
const c = { k: 2 };

a[b] = 77; // a["object object"] = 77
a[b] = 99; // a["object object"] = 99

delete user.addr;
Reflect.deleteProperty(user, "addr");

// const hasId = 'id' in user;
const hasId = user.hasOwnProperty("id");

// a+b  연산자가 유리
// a.add()

// delete user[sym];
console.log("🚀 user:", user);

const entries = Object.entries(user);
console.log("🚀 entries:", entries);

const entries2 = [];
for (let k of Reflect.ownKeys(user)) {
  entries2.push(k, user[k]);
}
console.log("🚀 entries2:", entries2);

const ooo = new Object(123);
console.log("🚀 ooo:", ooo);

class Dog {
  id = 1;
  static x = 2;
}
const dogId = Dog.id;
console.log("🚀 dogId:", dogId);
const dogX = Dog.x;
const maxx = new Dog();
console.log("🚀 maxx:", maxx);

user.age = 33;
Object.defineProperty(user, "age", { value: 39, writable: false });
const des = Object.getOwnPropertyDescriptors(user);
console.log("🚀 des:", des);
user.age = 33;

Object.assign({ x: 100 }, user); // vs {x:100, ...user}

const userJsonString = JSON.stringify(user, null, " ");
console.log("🚀 userJsonString:", userJsonString);

const uerObj = JSON.parse(userJsonString);
console.log("🚀 uerObj:", uerObj);

const str = '{"id": 1, "name": "hong"}';
const p1 = JSON.parse(str, function (k, v) {
  console.log("kkkkkkkkk -> ", k, v);
  return typeof v === "number" ? v * 2 : v;
});

let value = JSON.rawJSON("1234");
value = JSON.rawJSON('"str');

if (JSON.isRawJSON(value)) {
  const rj = value.rawJSON;
  console.log("🚀 rj:", rj);
}
const svalue = JSON.stringify({ value, value2 });
console.log("🚀 svalue:", svalue);
