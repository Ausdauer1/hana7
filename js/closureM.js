const assert = require("assert");
const DC_RATE = 0.5;

const items = [
  { item: "상품 A", price: 32000 },
  { item: "상품 B", price: 45000 },
];

function discount() {
  const dcRate = 0.1; // private variabl
  return (price) => {
    price * dcRate;
  };
}

const discount2 = () => (price) => price * DC_RATE;
//화살표 두개가 연결되는것이 쿼링

const MENU = { chinese: ["짜장면", "짬뽕"], italian: ["피자", "파스타"] };
function restaurant(kind) {
  const menu = MENU[kind];
  return function (menuIndex) {
    return menu[menuIndex];
  };
}
const lunch = restaurant("chinese");
console.log(lunch(0));

const dinner = restaurant("italian");
console.log(dinner(0), dinner(1));

// 옆반, 뒷반, 우리반을 완전히 나누고 다음
// const Button = (mode) => () => <Button mode={mode} />;
// const darkButton = Button("dark");
// darkButton("a");
// darkButton("b");

// 출입자 수를 게이트 별로 구하는 함수를 작성하시오

// 해당 함수의 environment record를 포함하고 있으면
function getCounter() {
  let currCount = 0;
  return {
    plus() {
      currCount += 1;
    },
    minus() {
      currCount -= 1;
    },
    // es6
    Count() {
      return currCount;
    },
    get count() {
      return currCount;
    },
    // es5
    cnt: () => currCount,
  };
}

class Counter {
  #currCount = 0;
  plus() {
    this.#currCount += 1;
  }
  minus() {
    this.#currCount += 1;
  }
}

const gate1 = getCounter();
const gate2 = getCounter();

gate1.plus();
gate2.plus();
// gate2.minus();

console.log("gate1>>", gate1.Count());
console.log("gate2>>", gate1.Count());
console.log("gate2>>", gate2.count);
console.log("gate2>>", gate2.cnt());

console.log("--------------------------");

function factorial(n) {
  if (n === 1) return 1;
  return n * factorial(n - 1);
}
const f3 = factorial(3);
console.log("🚀 f3:", f3);
const f5 = factorial(5);
console.log("🚀 f5:", f5);

let n = 3;
let sum = 1;
for (let i = n; i > 0; i -= 1) {
  sum = sum * i;
}

function factorialTCO(n, acc = 1) {
  if (n === 1) return acc;
  return factorialTCO(n - 1, acc * n);
}
console.log(factorialTCO(3));

function makeArray(n) {
  if (n === 1) return [1];
  return [...makeArray(n - 1), n];
}
console.log(makeArray(10));
const m1 = makeArray(10);
assert.deepEqual(m1, [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
assert.equal(m1[0], "1");
assert.strictEqual(m1[0], 1, "reversefail !!");

function makeReverseArray(n, acc = []) {
  if (n === 0) return acc;
  acc = [...acc, n];
  return makeReverseArray(n - 1, acc);
}

function makeArrayTCO(n, acc = []) {
  if (n === 0) return acc; // if (n === 1) return [1, acc]
  acc = [n, ...acc];
  return makeArrayTCO(n - 1, acc);
}

console.log(makeArrayTCO(10));
console.log(makeReverseArray(5));
